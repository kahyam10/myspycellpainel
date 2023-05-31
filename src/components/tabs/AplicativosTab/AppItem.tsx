import { Flex, Text, Box, Link, IconButton } from "@chakra-ui/core";
import React, { useEffect } from "react";
import { useState } from "react";
import { MdLink, MdPlaylistAdd, MdSearch } from "react-icons/md";
import {
  SiGooglechrome,
  SiInternetexplorer,
  SiMicrosoftedge,
} from "react-icons/si";
import { getSmallDate } from "../../../utils/dateFunctions";
import SelectItemButton from "../../button/selectItemButton";
import ItemText from "../../text/itemDate";
import ItemLetter from "../../text/itemLetter";
type Props = {
  App: IApp;
  list: number[];
  fun: (id:number, func:boolean)=>void;
  isSelectionMode: boolean;
};
 
const AppItem: React.FC<Props> = ({ App, fun, isSelectionMode, list }) => {
 
  const [Selected, setSelected] = useState<boolean>(false);
  
  var Select=()=>{
    setSelected(!Selected);
    fun(App.id,!Selected);
  }

  useEffect(()=>{
    if (list.length>0){
      var index=list.findIndex(item=>item===App.id);
      if (index > -1){
        setSelected(true);
      }
    }

  },[])
 
  return (
    <Flex
    flexDir="row"
    id={App.id.toString()}
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
        <ItemLetter
          letter={App.name.substr(0, 1).toLocaleUpperCase()}
          size="50px"
          letterSize="1.5rem"
        />

        <Flex
          width="90%"
          flexDir="column"
          marginLeft={4}
          alignItems="flex-start"
          justifyContent="space-around"
        >
          <Flex gridArea="name" flexDir="row">
            <Text fontWeight="bold" color="blue.500">
              Nome:
            </Text>{" "}
            <Text marginLeft={1} color="gray.200">
              {App.name}
            </Text>
          </Flex>
          <Flex gridArea="name" flexDir="row">
            <Text fontWeight="bold" color="blue.500">
              Data de instalação:
            </Text>{" "}
            <Text marginLeft={1} color="gray.200">
              {getSmallDate(Number.parseInt(App.date_time))}
            </Text>
          </Flex>
        </Flex>
        <Flex flexDir="column" alignItems="center">
          <Link
            href={"https://play.google.com/store/search?q=" + App.name+"&c=apps"}
            target="_blank"
            isExternal
            cursor="pointer"
          >
            <Box
              as={MdSearch}
              aria-label="acessar"
              fontSize="42px"
              color="gray.200"
            />
          </Link>
        </Flex>
      </Flex>
    </Flex>
  </Flex>
  );
};

export default AppItem;
