import React, { useEffect, useState } from "react";
import { Flex, } from "@chakra-ui/core";

import { connect } from "react-redux";
import TabContainer from "../../container/TabContainer";
import WhatsAppList from "./WhatsAppList";
type Props = {
  account: AccountState;
  devices: DevicesState;
  whatsapp:WhatsappState
};

const WhatsAppTab: React.FC<Props> = ({ account, devices, whatsapp }) => {
  return (
    <TabContainer>
      <WhatsAppList whatsapp={whatsapp.state}/>
    </TabContainer>
  );
};

const mapStateProps = (state: {
  devicesReducer: DevicesState;
  accountReducer: AccountState;
  whatsappReducer: WhatsappState;
}) => ({
  devices: state.devicesReducer,
  account: state.accountReducer,
  whatsapp: state.whatsappReducer,
});

export default connect(mapStateProps)(WhatsAppTab);
