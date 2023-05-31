import { Flex, Text, Box, Link, IconButton } from "@chakra-ui/core";
import React, { useEffect, useState } from "react";
import { MdLink } from "react-icons/md";
import {
  SiGooglechrome,
  SiInternetexplorer,
  SiMicrosoftedge,
} from "react-icons/si";
import { getSmallDate } from "../../../utils/dateFunctions";
import SelectItemButton from "../../button/selectItemButton";
type Props = {
  history: IHistory;
  list: number[];
  fun: (id:number, func:boolean)=>void;
  isSelectionMode: boolean;
}; 

const HistoryItem: React.FC<Props> = ({ history, fun, isSelectionMode, list  }) => {
  const [Selected, setSelected] = useState<boolean>(false);
  
  var Select=()=>{
    setSelected(!Selected);
    fun(history.id,!Selected);
  }
  
  useEffect(()=>{
    if (list.length>0){
      var index=list.findIndex(item=>item===history.id);
      if (index > -1){
        setSelected(true);
      }
    }

  },[])

  function SelectNavigatorIcon(browser: number) {
    switch (browser) {
      case 1:
        return SiInternetexplorer;
      case 2:
        return SiGooglechrome;
      case 3:
        return SiMicrosoftedge;
      default:
        return SiInternetexplorer;
    }
  }


  return (
    <Flex
    flexDir="row"
    id={history.id.toString()}
    marginTop={2}
    borderRadius={4} 
    backgroundColor="gray.500"
    alignItems="center"
    >
    <SelectItemButton
      value={Selected}
      setValue={Select}
      isSelectionMode={isSelectionMode}
      />
    <Flex
      flexDirection="column"
      width="100%"
      height="75px"
      padding={2}
      alignItems="center"
    >
      <Flex
        flexDir="row"
        width="100%"
        height="100%"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Box
          as={SelectNavigatorIcon(history.browser)}
          fontSize="42px"
          color="blue.600"
          marginLeft={2}
        />
        <Flex
          width="100%"
          flexDir="column"
          marginLeft={4}
          alignItems="flex-start"
          justifyContent="space-around"
        >
          <Flex gridArea="name" flexDir="row">
            <Text fontWeight="bold" color="blue.500">
              Endereço:
            </Text>{" "}
            <Link
              href={"https://" + history.url}
              isExternal
              marginLeft={1}
              color="gray.200"
            >
              {history.url}
            </Link>
          </Flex>
          <Flex gridArea="name" flexDir="row">
            <Text fontWeight="bold" color="blue.500">
              Acessado em:
            </Text>{" "}
            <Text marginLeft={1} color="gray.200">
              {getSmallDate(Number.parseInt(history.date_time))}
            </Text>
          </Flex>
        </Flex>
        <Link
          href={"https://" + history.url}
          target="_blank"
          isExternal
          cursor="pointer"
        >
          <Box
            as={MdLink}
            aria-label="acessar"
            fontSize="42px"
            color="gray.200"
          />
        </Link>
      </Flex>
    </Flex>
 </Flex>
 );
};

export default HistoryItem;
