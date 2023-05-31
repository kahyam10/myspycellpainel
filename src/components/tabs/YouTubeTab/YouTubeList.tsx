import { CircularProgress, Flex, Text, useToast } from "@chakra-ui/core";
import React, { useEffect, useState } from "react";
import SearcInput from "../../input/searchInput";

import { useRouter } from "next/router";
import YouTubeItem from "./YouTubeItem";
import TabTitle from "../../text/tabTitle";
import { DeleteYoutube, FetchYoutube } from "../../../services/ApiActions";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { SetYoutube } from "../../../store/actions/youtubeActions";
import InfiniteScroll from "react-infinite-scroll-component";
import EditContainer from "../../container/EditContainer";

type Props = {
  youtube: IYoutube[];

  account: IAccount | null;
  login: ILogin | null;
};

const YouTubeList: React.FC<Props> = ({ youtube, account, login }) => {
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [FilterList, setFilterList] = useState<IYoutube[]>(youtube);
  const [SelectionList, setSelectionList] = useState<number[]>([]);
  const [SelectMode, setSelectMode] = useState<boolean>(false);
  const [ItemCount, setItemCount] = useState<number>(20);
  const [LoadMore, setLoadMore] = useState<boolean>(true);

  const router = useRouter();
  const toast = useToast();
  const dispatch: Dispatch<any> = useDispatch();

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
      youtube.map((item: IYoutube) => {
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
        await DeleteYoutube(SelectionList, login, account.active_device.reg_id);
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
    }else{
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
      dispatch(SetYoutube(await FetchYoutube(id, login)));
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

  useEffect(() => {
    const { query } = router.query;
    if (query) {
      if (query.length > 0) {
        setSearch(query.toString());
      }
    }
  }, []);

  useEffect(() => {
    setLoading(true);
    setItemCount(20);
    setLoadMore(true);
    //setFilterList([]);
    var list: IYoutube[] = new Array();
    if (search === "") {
      list = youtube.sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        } else if (a.title > b.title) {
          return 1;
        }
        return 0;
      });
      setFilterList(list);
    } else {
      youtube.map((item: IYoutube) => {
        if (
          item.channel.toLowerCase().includes(search.toLowerCase()) ||
          item.title.toLowerCase().includes(search.toLowerCase())
        ) {
          list.push(item);
        }
      });
      list = list.sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        } else if (a.title > b.title) {
          return 1;
        }
        return 0;
      });
      setFilterList(list);
    }
    setTimeout(() => {
      setLoading(false);
    }, 100);
  }, [search, youtube]);


  return (
    <Flex flexDir="column" width="100%" padding={6}>
      <TabTitle>Histórico de videos assistidos</TabTitle>
      <SearcInput
        placeHolder="Procurar Site"
        isLoading={loading}
        value={search}
        setValue={setSearch}
      />
      <EditContainer
        text="Editar Histórico de Youtube"
        cancel={CancelSelection}
        selectionCount={SelectionList.length}
        selectionMode={setSelectMode}
        select={SelectMode}
        selectAll={SelectAll}
        del={DeleteSelectedItens}
        IsAllItensSelected={IsAllSelected() ? true : false}
      />
      <Text
        display={SelectMode ? "flex" : "none"}
        color="blue.600"
        fontWeight="bold"
        textAlign="left"
        marginTop={4}
      >
        Itens selecionados {SelectionList.length} de {FilterList.length}.
      </Text>
      <Flex flexDir="column" marginTop={2}>
        {loading ? (
          <Flex width="100%" justifyContent="center">
            <CircularProgress
              isIndeterminate
              color="blue"
              trackColor="red"
              thickness={0.3}
              size="2rem"
              capIsRound
            />
          </Flex>
        ) : (
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
            {FilterList.slice(0, ItemCount).map((item: IYoutube) => {
              return (
                <YouTubeItem
                key={item.id}
                  youtube={item}
                  fun={SelectItem}
                  isSelectionMode={SelectMode}
                  list={SelectionList}
                />
              );
            })}
          </InfiniteScroll>
        )}
        <Text color="blue.600" fontWeight="bold" textAlign="left" marginTop={4}>
          Exibindo {FilterList.length} de {youtube.length} Vídeos
        </Text>
      </Flex>
    </Flex>
  );
};

export default YouTubeList;
