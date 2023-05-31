import { Flex, Text, Box } from "@chakra-ui/core";
import React from "react";
import { MdLink, MdWhatshot } from "react-icons/md";
import ItemLetter from "../../text/itemLetter";

type Props = {
  contact: IInstagramContacts;
  active: boolean;
  setActive: React.Dispatch<
    React.SetStateAction<IInstagramContacts | undefined>
  >;
};

const InstagramContactListItem: React.FC<Props> = ({
  contact,
  active,
  setActive,
}) => {
  function getLastMessage(conversation: IInstagram[]) {
    var lastMessage = conversation[conversation.length - 1].message;
    return lastMessage;
  }

  return (
    <Flex
      flexDirection="column"
      height="75px"
      marginTop={1}
      backgroundColor={active ? "blue.700" : "gray.500"}
      padding={2}
      alignItems="center"
      borderRadius={4}
      onClick={() => setActive(contact)}
      cursor="pointer"
    >
      <Flex
        flexDir="row"
        width="100%"
        height="100%"
        justifyContent="flex-start"
        alignItems="center"
      > 
        <ItemLetter
          letter={contact.name.substring(0, 1).toLocaleUpperCase()}
          size="50px"
          letterSize="2rem"
        />
        <Flex
          id="name-message"
          width="75%"
          flexDir="column"
          marginLeft={2}
          alignItems="flex-start"
          justifyContent="center"
        >
          <Text fontWeight="medium" fontSize="1.3rem" color="gray.400">
            {contact.name}
          </Text>
          <Text
            display="block"
            overflow="hidden"
            height="20px"
            fontSize="0.9rem"
          >
            {getLastMessage(contact.conversation)}
          </Text>
        </Flex>
     
        <Flex
          id="count-time"
          flexDir="column"
          marginLeft={1}
          justifyContent="space-around"
          height="100%"
        >
          <Text textAlign="center" fontSize="0.8rem" color="gray.200">
            Ontem
          </Text>
          <Text
            padding={0.5}
            backgroundColor="blue.500"
            color="gray.600"
            fontWeight="medium"
            borderRadius={10}
            textAlign="center"
            fontSize="0.8rem"
          >
            {contact.conversation.length}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default InstagramContactListItem;
