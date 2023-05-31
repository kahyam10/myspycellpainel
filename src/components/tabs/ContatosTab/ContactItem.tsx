import {
  Flex,
  Text,
  IconButton,
  ButtonGroup,
} from "@chakra-ui/core";
import React, { useEffect, useState } from "react";
import { MdCall, MdSms } from "react-icons/md";
import { useRouter } from "next/router";
import ItemLetter from "../../text/itemLetter";
import SelectItemButton from "../../button/selectItemButton";

type Props = {
  contact: IContact;
  list: number[];
  fun: (id:number, func:boolean)=>void;
  isSelectionMode: boolean;
};

const ContactItem: React.FC<Props> = ({ contact, fun, isSelectionMode, list }) => {
  const router = useRouter();
  const [Selected, setSelected] = useState<boolean>(false);

  useEffect(()=>{
    if (list.length>0){
      var index=list.findIndex(item=>item===contact.id);
      if (index > -1){
        setSelected(true);
      }
    }

  },[])

  var Select=()=>{
    setSelected(!Selected);
    fun(contact.id,!Selected);
  }

  return (
    <Flex
    flexDir="row"
    id={contact.id.toString()}
    key={contact.id}
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
      flexDirection="row"
      height="75px"
      width="100%"
      padding={2}
      alignItems="center"
    >
      <ItemLetter
        letter={contact.name.substr(0, 1).toLocaleUpperCase()}
        size="60px"
        letterSize="2rem"
      />

      <Flex
        width="80%"
        flexDir="column"
        marginLeft={4}
        alignItems="flex-start"
        justifyContent="space-around"
      >
        <Flex gridArea="name" flexDir="row">
          <Text fontWeight="bold" color="blue.600">
            Nome:
          </Text>{" "}
          <Text marginLeft={1}>{contact.name}</Text>
        </Flex>
        <Flex gridArea="numbers" flexDir="row">
          <Text fontWeight="bold" color="blue.600">
            Número:
          </Text>{" "}
          <Text marginLeft={1}>{contact.number}</Text>
        </Flex>
      </Flex>
     
      <ButtonGroup spacing={2} width="120px">
        <IconButton
          size="md"
          fontSize="25px"
          icon={MdCall}
          aria-label="Ligações"
          backgroundColor="blue.600"
          onClick={() =>
            router.push(
              "/dashboard/ligacoes?query=" +
                contact.name.substring(0, contact.name.indexOf(" "))
            )
          }
        />
        <IconButton
          size="md"
          fontSize="25px"
          icon={MdSms}
          aria-label="Mensagens"
          backgroundColor="blue.600"
          onClick={() =>
            router.push(
              "/dashboard/mensagens?query=" +
                contact.name.substring(0, contact.name.indexOf(" "))
            )
          }
        />
      </ButtonGroup>
    </Flex>
    </Flex>  
  );
};

export default ContactItem;
