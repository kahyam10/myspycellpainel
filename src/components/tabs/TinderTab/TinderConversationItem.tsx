import { Flex, Text } from "@chakra-ui/core";
import React from "react";

import TinderConversationNormal from "./ConversationTypes/Normal";

type Props = {
  chat: ITinder;
};
const TinderConversationItem: React.FC<Props> = ({ chat }) => {

  return <TinderConversationNormal chat={chat}/>;
};

export default TinderConversationItem;
