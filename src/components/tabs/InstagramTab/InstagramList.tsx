import { Flex, Heading } from "@chakra-ui/core";
import React, { useEffect, useState } from "react";
import TabTitle from "../../text/tabTitle";
import InstagramContactList from "./InstagramContactList";
import InstagramConversation from "./InstagramConversation";

type Props = {
  instagram: IInstagramContacts[];
};

const InstagramList: React.FC<Props> = ({ instagram }) => {
 
  const [activeChat, setActiveChat] = useState<IInstagramContacts>();

  return (
    <Flex flexDir="column" width="100%" padding={6} height="100%">
      <TabTitle>Instagram</TabTitle>
        <Flex flexDir="row"  height="100%" >
            <InstagramContactList contacts={instagram} active={activeChat} setActive={setActiveChat}/>
            <Flex width={2} height="100%"/>
            <InstagramConversation chat={activeChat?.conversation}/>
        </Flex>
      
    </Flex>
  );
};

export default InstagramList;
