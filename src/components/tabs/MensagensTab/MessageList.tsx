import { CircularProgress, Flex, Heading, Text, useToast } from "@chakra-ui/core";
import React, { useEffect, useState } from "react";
import SearcInput from "../../input/searchInput";
import MessageItem from "./MessageItem";
import { useRouter } from "next/router";
import TabTitle from "../../text/tabTitle";
import { MdCallMade, MdCallReceived, MdCallMissedOutgoing, MdSmsFailed } from "react-icons/md";
import FilterButton from "../../button/filterButton";
import FilterContainer from "../../container/FilterContainer";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { SetMessages } from "../../../store/actions/messageActions";
import { DeleteMessages, FetchMessages } from "../../../services/ApiActions";
import EditContainer from "../../container/EditContainer";
import InfiniteScroll from "react-infinite-scroll-component";

type Props = {
  messages: IMessage[];
  account: IAccount | null;
  login: ILogin | null;
}; 

const MessageList: React.FC<Props> = ({ messages, account, login  }) => {
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [FilterList, setFilterList] = useState<IMessage[]>(messages);
  const [SelectionList, setSelectionList] = useState<number[]>([]);
  const [SelectMode, setSelectMode] = useState<boolean>(false);
  const [ItemCount, setItemCount] = useState<number>(20);
  const [LoadMore, setLoadMore] = useState<boolean>(true);

  const [FilterLost, setFilterLost] = useState<boolean>(true);
  const [FilterSent, setFilterSent] = useState<boolean>(true);
  const [FilterReceived, setFilterReceived] = useState<boolean>(true);

  const dispatch: Dispatch<any> = useDispatch();
  const toast = useToast();
  const router = useRouter();
 


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
      messages.map((item: IMessage) => {
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
        await DeleteMessages(SelectionList, login, account.active_device.reg_id);
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
      dispatch(SetMessages(await FetchMessages(id, login)));
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
  function filterType(type: number) {
    switch (type) {
      case 1:
        return FilterSent;
      case 2:
        return FilterReceived;
      default:
        return FilterLost;
    }
  }

  useEffect(() => {
    const { query } = router.query;
    if (query) {
      if (query.length > 0) {
        setSearch(query.toString());
      }
    }
  }, []);

  useEffect(()=>{
    setLoading(true);
    setFilterList([]);
    var list: IMessage[] = new Array();
    console.log(FilterReceived);
    if (search === "") {
      if (FilterLost == true && FilterReceived == true && FilterSent == true) {
        setFilterList(messages);
      } else {
        messages.map((item: IMessage) => {
          if (filterType(item.type) == true) {
            list.push(item);
          }
        });
        setFilterList(list);
      }
    } else {
      messages.map((item: IMessage) => {
        if (
          item.name.toLowerCase().includes(search.toLowerCase()) ||
          item.number.toLowerCase().includes(search.toLowerCase())
        ) {
          if (filterType(item.type) == true) {
            list.push(item);
          }
        }
      });
      setFilterList(list);
    }
    setTimeout(() => {
      setLoading(false);
    }, 100);
  },[search, FilterReceived, FilterSent, FilterLost, messages])

  return (
    <Flex
      flexDir="column"
      width="100%"
      padding={6}
    >
      <TabTitle>
        Lista de Mensagens SMS
      </TabTitle>
      <SearcInput
        placeHolder="Procurar Mensagem"
        isLoading={loading}
        value={search}
        setValue={setSearch}
      />
       <FilterContainer text="Exibir:">
        <FilterButton
          value={FilterSent}
          setValue={setFilterSent}
          icon={MdCallMade}
          name={"Enviada"}
        />
        <FilterButton
          value={FilterReceived}
          setValue={setFilterReceived}
          icon={MdCallReceived}
          name={"Recebidas"}
        />
        <FilterButton
          value={FilterLost}
          setValue={setFilterLost}
          icon={MdSmsFailed}
          name={"Perdidas"}
        />
      </FilterContainer>
      <EditContainer
        text="Editar Histórico de Mensagens"
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
            {FilterList.map((item: IMessage) => {
              return (
                <MessageItem
                key={item.id}

                  message={item}
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
          Exibindo {FilterList.length} de {messages.length} Mensagens
        </Text>
    </Flex>
  );
};

export default MessageList;
