import { Flex, Text } from '@chakra-ui/core';
import React from 'react';
import { getSmallDate } from '../../../../utils/dateFunctions';

type Props={
    chat:IWhatsapp;
}

const WhatsappConversationGroup: React.FC<Props> =({chat}) => {
  return (
    <Flex
    backgroundColor="gray.500"
    borderRadius={8}
    marginTop={2}
    padding={2}
    flexDir="column"
    width="fit-content"
    alignSelf={chat.direction===1 ? "flex-start":"flex-end"}
    maxWidth="80%"
  >
      <Text fontWeight="bold" color="blue.600">{chat.contact_group}</Text>
    <Text>{chat.message}</Text>
    <Text fontSize="0.7rem" fontWeight="bold" alignSelf="flex-end">{getSmallDate(chat.date_time)}</Text>
  </Flex>
  );
}

export default WhatsappConversationGroup;