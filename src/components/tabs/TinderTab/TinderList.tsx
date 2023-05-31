import { Flex, Heading } from "@chakra-ui/core";
import React, { useEffect, useState } from "react";
import TabTitle from "../../text/tabTitle";
import TinderContactList from "./TinderContactList";
import TinderConversation from "./TinderConversation";

type Props = {
  Tinder: ITinderContacts[];
};

const TinderList: React.FC<Props> = ({ Tinder }) => {
  const [activeChat, setActiveChat] = useState<ITinderContacts>();

  return (
    <Flex flexDir="column" width="100%" padding={6} height="100%">
      <TabTitle>Tinder</TabTitle>
      <Flex flexDir="row" height="100%">
        <TinderContactList
          contacts={Tinder}
          active={activeChat}
          setActive={setActiveChat}
        />
        <Flex width={2} height="100%" />
        <TinderConversation chat={activeChat?.conversation} />
      </Flex>
    </Flex>
  );
};

export default TinderList;
