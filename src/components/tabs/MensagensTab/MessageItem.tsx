import {
  Grid,
  Flex,
  Text,
  Box,
  IconButton,
  ButtonGroup,
} from "@chakra-ui/core";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import {
  MdCall,
  MdCallMade,
  MdSmsFailed,
  MdCallReceived,
  MdContacts,
} from "react-icons/md";
import { getSmallDate } from "../../../utils/dateFunctions";
import SelectItemButton from "../../button/selectItemButton";
import ItemLetter from "../../text/itemLetter";

type Props = {
  message: IMessage;
  list: number[];
  fun: (id:number, func:boolean)=>void;
  isSelectionMode: boolean;
}; 

const MessageItem: React.FC<Props> = ({ message, fun, isSelectionMode, list }) => {
  const [color1, setColor1] = useState<string>();
  const [color2, setColor2] = useState<string>();
  const [text, setText] = useState<string>();
  const [Selected, setSelected] = useState<boolean>(false);

  useEffect(()=>{
    if (list.length>0){
      var index=list.findIndex(item=>item===message.id);
      if (index > -1){
        setSelected(true);
      }
    } 

  },[])

  var Select=()=>{
    setSelected(!Selected); 
    fun(message.id,!Selected);
  }

  const route = useRouter();

  useEffect(() => {
    function SetColorTheme() {
      switch (message.type) {
        case 1:
          setColor1("green.500");
          setColor2("green.900");
          setText("Mensagem Enviada");
          break;
        case 2:
          setColor1("orange.500");
          setColor2("orange.900");
          setText("Mensagem Recebida");
          break;

        default:
          setColor1("red.500");
          setColor2("red.900");
          setText("Mensagem não Enviada");
          break;
      }
    }
    SetColorTheme();
  }, []);

  return (
    <Flex
      flexDir="row"
      id={message.id.toString()}
      marginTop={2}
      borderRadius={4}
      backgroundColor={color1}
      alignItems="center"
    >
      <SelectItemButton
        value={Selected}
        setValue={Select}
        isSelectionMode={isSelectionMode}
      />
    <Flex
       padding={2}
       width="100%"
       flexDirection="column"
       alignItems="flex-start"
    >
      <Grid id="message-info" templateColumns="30px 1fr 1fr 100px" width="100%">
      <ItemLetter letter={message.name.substr(0,1).toLocaleUpperCase()} size="30px" letterSize="1.2rem"/>

        <Flex flexDir="row" marginLeft={4}>
          <Text fontWeight="bold" color={color2}>
            Nome:
          </Text>{" "}
          <Text marginLeft={1} color="gray.900">
            {message.name}
          </Text>
        </Flex>
        <Flex flexDir="row" marginLeft={4}>
          <Text fontWeight="bold" color={color2}>
            Número:
          </Text>{" "}
          <Text marginLeft={1} color="gray.700">
            {message.number}
          </Text>
        </Flex>

        <Flex
          id="message-type"
          flexDir="row"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Text
            fontSize="0.7rem"
            color={color2}
            fontWeight="700"
            textAlign="center"
          >
            {text}
          </Text>
          <Box
            as={
              message.type === 1
                ? MdCallMade
                : message.type === 2
                ? MdCallReceived
                : MdSmsFailed
            }
            marginLeft={1}
            color={color2}
            fontSize="1.8rem"
          />
        </Flex>
      </Grid>

      <Box
        id="message-text"
        backgroundColor={color2}
        padding={4}
        borderRadius={4}
        marginTop={2}
        width="100%"
      >
        <Text fontFamily="noticia text" color="gray.200">{message.message}</Text>
      </Box>
      <Flex
        id="message-footer"
        flexDir="row"
        width="100%"
        marginTop={2}
        justifyContent="space-between"
      >
        <Flex flexDir="row">
          <Text color={color2} fontWeight="bold">
            Data e Hora:
          </Text>
          <Text marginLeft={1} color={color2}>
            {getSmallDate(Number.parseInt(message.date_time))}
          </Text>
        </Flex>
        <ButtonGroup id="buttons" spacing={2}>
          <IconButton
            size="sm"
            fontSize="16px"
            icon={MdContacts}
            aria-label="Ligações"
            backgroundColor={color2}
            color={color1}
            onClick={() =>
              route.push(
                "/dashboard/contatos?query=" +
                  message.name.substring(0, message.name.indexOf(" "))
              )
            }
          />
          <IconButton
            size="sm"
            fontSize="16px"
            icon={MdCall}
            aria-label="Ligacoes"
            backgroundColor={color2}
            color={color1}
            onClick={() =>
              route.push(
                "/dashboard/ligacoes?query=" +
                  message.name.substring(0, message.name.indexOf(" "))
              )
            }
          />
        </ButtonGroup>
      </Flex>
    </Flex>
 </Flex>
  );
};

export default MessageItem;
