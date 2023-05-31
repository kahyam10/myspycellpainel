import { Flex, Text, Box, Link } from "@chakra-ui/core";
import React, { useEffect, useState } from "react";
import { MdYoutubeSearchedFor } from "react-icons/md";
import {
  SiYoutube,
} from "react-icons/si";
import { getSmallDate } from "../../../utils/dateFunctions";
import SelectItemButton from "../../button/selectItemButton";


type Props = {
  youtube: IYoutube;
  list: number[];
  fun: (id:number, func:boolean)=>void;
  isSelectionMode: boolean;
};

const YouTubeItem: React.FC<Props> = ({ youtube, fun, isSelectionMode, list }) => {
  const [Selected, setSelected] = useState<boolean>(false);

  useEffect(()=>{
    if (list.length>0){
      var index=list.findIndex(item=>item===youtube.id);
      if (index > -1){
        setSelected(true);
      }
    }

  },[])

  function getQuery(channel: string, title: string) {
    var query = channel + "-" + title;
    query = query.replace(" ", "+");
    return query;
  }


  var Select=()=>{
    setSelected(!Selected);
    fun(youtube.id,!Selected);
  }

  return (
    <Flex
    flexDir="row"
    id={youtube.id.toString()}
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
      height="100px"
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
        <Box as={SiYoutube} fontSize="42px" color="red.700" marginLeft={2} />

        <Flex
          width="100%"
          flexDir="column"
          marginLeft={4}
          alignItems="flex-start"
          justifyContent="space-around"
        >
          <Flex gridArea="channel" flexDir="row">
            <Text fontWeight="bold" color="blue.500">
              Canal:
            </Text>{" "}
            <Text marginLeft={1} color="gray.200">
              {youtube.channel}
            </Text>
          </Flex>
          <Flex gridArea="title" flexDir="row">
            <Text fontWeight="bold" color="blue.500">
              Título do vídeo:
            </Text>{" "}
            <Text color="gray.200" marginLeft={1}>
              {youtube.title}
            </Text>
          </Flex>
          <Flex gridArea="date" flexDir="row">
            <Text fontWeight="bold" color="blue.500">
              Acessado em:
            </Text>{" "}
            <Text color="gray.200" marginLeft={1}>
            {getSmallDate(Number.parseInt(youtube.date_time))}
            </Text>
          </Flex>
        </Flex>
        <Link
          display="flex"
          flexDir="column"
          alignItems="center"
          cursor="pointer"
          href={
            "https://www.youtube.com/results?search_query=" +
            getQuery(youtube.channel, youtube.title)
          }
          isExternal
        >
          <Box
            as={MdYoutubeSearchedFor}
            fontSize="42px"
            color="gray.200"
            marginLeft={2}
          />
        </Link>
      </Flex>

    </Flex>
 </Flex>
  );
};

export default YouTubeItem;
