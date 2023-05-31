import { Flex, Text } from "@chakra-ui/core";
import React from "react";

import InstagramConversationNormal from "./ConversationTypes/Normal";

type Props = {
  chat: IInstagram;
};
const InstagramConversationItem: React.FC<Props> = ({ chat }) => {

  return <InstagramConversationNormal chat={chat}/>;
};

export default InstagramConversationItem;
