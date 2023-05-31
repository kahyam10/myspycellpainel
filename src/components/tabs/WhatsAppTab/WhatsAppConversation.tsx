import { Box, Flex, Heading } from "@chakra-ui/core";
import React, { useEffect } from "react";
import ItemLetter from "../../text/itemLetter";
import WhatsAppConversationItem from "./WhatsappConversationItem";

type Props = {
  chat?: IWhatsapp[];
};

const WhatsAppConversation: React.FC<Props> = ({ chat }) => {
  return (
    <Flex
      width="100%"
      height="100%"
      borderRadius={8}
      backgroundColor="gray.700"
      flexDir="column"
      overflow="hidden"
    >
      <Flex
        height="50px"
        backgroundColor="blue.600"
        width="100%"
        flexDir="row"
        alignItems="center"
        paddingLeft={2}
      >
        <ItemLetter
          letter={
            chat != undefined
              ? chat[0].contact_name.substr(0, 1).toLocaleUpperCase()
              : ""
          }
          size="35px"
          letterSize="1.4rem"
        />
        <Heading fontSize="1.5rem" fontWeight="normal" marginLeft={1}>
          {chat != undefined ? chat[0].contact_name : ""}
        </Heading>
      </Flex>
      <Flex padding={4} width="100%" flexDir="column">
        {chat != undefined
          ? chat.map((item: IWhatsapp) => {
              return <WhatsAppConversationItem key={item.id} chat={item} />;
            })
          : ""}
      </Flex>
    </Flex>
  );
};

export default WhatsAppConversation;
