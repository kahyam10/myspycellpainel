import { Flex, Text } from "@chakra-ui/core";
import React from "react";
import { getSmallDate } from "../../../../utils/dateFunctions";

type Props = {
  chat: IWhatsapp;
};

const WhatsappConversationMentionNormal: React.FC<Props> = ({ chat }) => {
  return (
    <Flex
      backgroundColor="gray.500"
      borderRadius={8}
      marginTop={2}
      padding={2}
      flexDir="column"
      width="fit-content"
      alignSelf={chat.direction === 1 ? "flex-start" : "flex-end"}
      maxWidth="80%"
    >
      <Flex
        backgroundColor="gray.600"
        borderRadius={8}
        width="100%"
        flexDir="column"
        padding={2}
        marginTop={2}
        marginBottom={2}
      >
          <Text fontWeight="bold" color="blue.600">{chat.mention_contact}</Text>
          <Text>{chat.mention_message}</Text>
      </Flex>
      <Text>{chat.message}</Text>
      <Text fontSize="0.7rem" fontWeight="bold" alignSelf="flex-end">
        {getSmallDate(chat.date_time)}
      </Text>
    </Flex>
  );
};

export default WhatsappConversationMentionNormal;
