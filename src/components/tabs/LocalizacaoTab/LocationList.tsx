import {
  Box,
  CircularProgress,
  Flex,
  Heading,
  useToast,
} from "@chakra-ui/core";
import React, { Dispatch, useEffect, useRef, useState } from "react";
import { Scrollbar } from "react-scrollbars-custom";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch } from "react-redux";
import { DeleteLocations, FetchLocations } from "../../../services/ApiActions";
import { SetLocations } from "../../../store/actions/locationActions";
import TabTitle from "../../text/tabTitle";
import LocationItem from "./LocationItem";
import LocationMap from "./LocationMap";
import { getDay, getMoth, getYear } from "../../../utils/dateFunctions";
import LocationDayItem from "./LocationDayItem";

type Props = {
  locations: ILocation[];
  currentLocation: ILocation;
  setCurrentLocation: React.Dispatch<React.SetStateAction<ILocation>>;
  account: IAccount | null;
  login: ILogin | null;
};

type MapSize = {
  height: number;
  width: number;
};

const LocationList: React.FC<Props> = ({
  locations,
  currentLocation,
  setCurrentLocation,
  account,
  login,
}) => {
  const ref = useRef<HTMLHeadingElement>(null);
  const [mapSize, setMapSize] = useState<MapSize>({ height: 100, width: 100 });
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [FilterList, setFilterList] = useState<ILocationDays[]>([]);
  const [SelectionList, setSelectionList] = useState<number[]>([]);
  const [SelectMode, setSelectMode] = useState<boolean>(false);
  const [ItemCount, setItemCount] = useState<number>(10);
  const [LoadMore, setLoadMore] = useState<boolean>(true);
  const [ActiveDay, setActiveDay] = useState<ILocationDays>();

  function SelectItem(id: number, func: boolean): void {
    var list: number[] = SelectionList;
    if (func) {
      list = list.concat(id);
      setSelectionList(list);
    } else {
      list = list.filter((item) => item !== id);
      setSelectionList(list);
    }
  }
  function SelectAll() {
    setLoading(true);
    if (IsAllSelected()) {
      setSelectionList([]);
      setTimeout(() => {
        setLoading(false);
      }, 100);
    } else {
      var list: number[] = [];
      locations.map((item: ILocation) => {
        list.push(item.id);
      });
      setSelectionList(list);
      setSearch("");
      setTimeout(() => {
        setLoading(false);
      }, 200);
      if (!SelectMode) {
        setSelectMode(true);
      }
      toast({
        title: list.length + " Itens selecionados.",
        description: "",
        status: "info",
        duration: 3000,
        isClosable: true,
      });
    }
  }
  function IsAllSelected(): Boolean {
    if (SelectionList.length === FilterList.length) {
      return true;
    } else {
      return false;
    }
  }
  async function DeleteSelectedItens() {
    if (account) {
      if (account.active_device && login) {
        await DeleteLocations(
          SelectionList,
          login,
          account.active_device.reg_id
        );
        await fetchData(account.active_device.reg_id);
        toast({
          title: SelectionList.length + " Itens foram apagados.",
          description: "",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        setSelectionList([]);
      }
    } else {
      toast({
        title: "Erro",
        description: "Erro ao deletar os itens selecionados, tente novamente!",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  }
  function CancelSelection() {
    setSelectionList([]);
    setSelectMode(false);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 200);
    toast({
      title: "Operação cancelada.",
      description: "",
      status: "error",
      duration: 2000,
      isClosable: true,
    });
  }
  async function fetchData(id: string) {
    if (login) {
      dispatch(SetLocations(await FetchLocations(id, login)));
    }
  }
  var loadMore = () => {
    if (ItemCount < FilterList.length) {
      setTimeout(() => {
        setLoadMore(true);
        setItemCount(ItemCount + 20);
      }, 500);
    } else {
      setLoadMore(false);
    }
  };

  const toast = useToast();
  const dispatch: Dispatch<any> = useDispatch();

  function updateSize() {
    setMapSize({
      width: ref.current ? ref.current.offsetWidth : 100,
      height: ref.current ? ref.current.offsetHeight : 100,
    });
  }

  function getLocationDaysList(locs: ILocation[]) {
    if (locs.length > 0) {
      var list: ILocationDays[] = [];

      locs.forEach((item: ILocation) => {
        var date: number = Number.parseInt(item.date_time);
        var day: string[] = [getYear(date), getMoth(date), getDay(date)];

        if (list.length == 0) {
          var it: ILocationDays = {
            day,
            locations: [item],
          };
          list.push(it);
        } else {
          var exist: boolean = false;

          list.map((value: ILocationDays) => {
            if (
              value.day[0] === day[0] &&
              value.day[1] === day[1] &&
              value.day[2] === day[2]
            ) {
              exist = true;
              value.locations.push(item);
            }
          });

          if (!exist) {
            list.push({
              day,
              locations: [item],
            });
          }
        }
      });
      setFilterList(list);
      console.log(list);
    }
  }
  useEffect(() => {
    getLocationDaysList(locations);
  }, []);

  useEffect(() => {
    updateSize();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", updateSize);

    return () => {
      window.removeEventListener("resize", updateSize);
    };
  });

  return (
    <Flex flexDir="column" width="100%" padding={6}>
      <TabTitle>Histórico de Localização</TabTitle>
      <Flex flexDir="row">
        <Scrollbar style={{ width: "20%", minWidth: "250px", height: "80vh" }}>
          <InfiniteScroll
            style={{ overflow: "hidden" }}
            dataLength={ItemCount}
            next={loadMore}
            hasMore={LoadMore}
            loader={
              <Flex width="100%" justifyContent="center" marginTop={2}>
                <CircularProgress
                  isIndeterminate
                  color="blue"
                  trackColor="red"
                  thickness={0.3}
                  size="2rem"
                  capIsRound
                />
              </Flex>
            }
            endMessage={<></>}
          >
            {FilterList.slice(0, ItemCount).map((item: ILocationDays) => {
              return (
                <LocationDayItem
                  key={item.id}
                  location={item}
                  currentLocation={currentLocation}
                  setCurrentLocation={setCurrentLocation}
                  setActiveDay={setActiveDay}
                  activeDay={ActiveDay}
                />
              );
            })}
          </InfiniteScroll>
        </Scrollbar>
        <Flex padding={2} marginTop={2} width="100%" height="100%">
          <Box
            ref={ref}
            width="100%"
            height="100%"
            minHeight="80vh"
            backgroundColor="blue.500"
          >
            <LocationMap currentLocation={currentLocation} mapSize={mapSize} />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default LocationList;
