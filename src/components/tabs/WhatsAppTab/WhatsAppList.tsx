import { Flex, Heading } from "@chakra-ui/core";
import React, { useEffect, useState } from "react";
import TabTitle from "../../text/tabTitle";
import WhatsAppContactList from "./WhatsAppContactList";
import WhatsAppConversation from "./WhatsAppConversation";

type Props = {
  whatsapp: IWhatsappContacts[];
};

const WhatsAppList: React.FC<Props> = ({ whatsapp }) => {
 
  const [activeChat, setActiveChat] = useState<IWhatsappContacts>();

  return (
    <Flex flexDir="column" width="100%" padding={6} height="100%">
      <TabTitle>WhatsApp</TabTitle>
        <Flex flexDir="row"  height="100%" >
            <WhatsAppContactList contacts={whatsapp} active={activeChat} setActive={setActiveChat}/>
            <Flex width={2} height="100%"/>
            <WhatsAppConversation chat={activeChat?.conversation}/>
        </Flex>
      
    </Flex>
  );
};

export default WhatsAppList;
