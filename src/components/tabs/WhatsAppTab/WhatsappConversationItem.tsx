import { Flex, Text } from "@chakra-ui/core";
import React from "react";

import { getSmallDate } from "../../../utils/dateFunctions";
import WhatsappConversationGroup from "./ConversationTypes/Group";
import WhatsappConversationMentionGroup from "./ConversationTypes/MentionGroup";
import WhatsappConversationMentionNormal from "./ConversationTypes/MentionNormal";
import WhatsappConversationNormal from "./ConversationTypes/Normal";

type Props = {
  chat: IWhatsapp;
};
const WhatsAppConversationItem: React.FC<Props> = ({ chat }) => {
  function switchChatType(chat: IWhatsapp) {
    switch (chat.type) {
      case 1:
        return <WhatsappConversationNormal chat={chat} />;
      case 2:
        return <WhatsappConversationMentionNormal chat={chat}/>
      case 3:
        return <WhatsappConversationGroup chat={chat} />;
      case 4:
        return <WhatsappConversationMentionGroup chat={chat} />
      default:
        return "";
    }
  }

  return <>{switchChatType(chat)}</>;
};

export default WhatsAppConversationItem;
