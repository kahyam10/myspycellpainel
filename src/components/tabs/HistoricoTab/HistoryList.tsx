import {
  CircularProgress,
  Flex,
  Heading,
  Text,
  useToast,
} from "@chakra-ui/core";
import React, { useEffect, useState } from "react";
import SearcInput from "../../input/searchInput";

import { useRouter } from "next/router";
import HistoryItem from "./HistoryItem";
import TabTitle from "../../text/tabTitle";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { SetHistory } from "../../../store/actions/historyActions";
import { DeleteHistory, FetchHistory } from "../../../services/ApiActions";
import EditContainer from "../../container/EditContainer";
import InfiniteScroll from "react-infinite-scroll-component";
type Props = {
  histories: IHistory[];
  account: IAccount | null;
  login: ILogin | null;
};

const HistoryList: React.FC<Props> = ({ histories, account, login }) => {
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [FilterList, setFilterList] = useState<IHistory[]>(histories);
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
      histories.map((item: IHistory) => {
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
        await DeleteHistory(SelectionList, login, account.active_device.reg_id);
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
      dispatch(SetHistory(await FetchHistory(id, login)));
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
    setFilterList([]);
    var list: IHistory[] = new Array();
    if (search === "") {
      setFilterList(histories);
    } else {
      histories.map((item: IHistory) => {
        if (item.url.toLowerCase().includes(search.toLowerCase())) {
          list.push(item);
        }
      });
      setFilterList(list);
    }
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [search, histories]);

  return (
    <Flex flexDir="column" width="100%" padding={6}>
      <TabTitle>Histórico de sites acessados</TabTitle>
      <SearcInput
        placeHolder="Procurar Site"
        isLoading={loading}
        value={search}
        setValue={setSearch}
      />
      <EditContainer
        text="Editar Histórico da Internet"
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
            {FilterList.slice(0, ItemCount).map((item: IHistory) => {
              return (
                <HistoryItem
                key={item.id}

                  history={item}
                  fun={SelectItem}
                  isSelectionMode={SelectMode}
                  list={SelectionList}
                />
              );
            })}
          </InfiniteScroll>
        )}
      </Flex>
      <Text color="blue.600" fontWeight="bold" textAlign="left" marginTop={4}>
        Exibindo {FilterList.length} de {histories.length} Sites
      </Text>
    </Flex>
  );
};

export default HistoryList;
