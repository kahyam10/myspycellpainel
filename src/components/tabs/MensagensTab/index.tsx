import React, { useEffect, useState } from "react";
import { Box, Grid, Flex, Text, Heading } from "@chakra-ui/core";

import { connect } from "react-redux";
import MessageList from "./MessageList";
import TabContainer from "../../container/TabContainer";

type Props = {
  messages: MessageState;
  account: AccountState;
  devices: DeviceState;
  login: LoginState;
};

const MensagensTab: React.FC<Props> = ({ messages, account, devices, login }) => {
  return (
    <TabContainer>
    <Flex as="main" flexDir="column">
      <MessageList messages={messages.state} account={account.state} login={login.state}/>
    </Flex>
    </TabContainer>
  );
}; 

const mapStateProps = (state: {
  devicesReducer: DeviceState;
  accountReducer: AccountState;
  loginReducer: LoginState;
  messagesReducer: MessageState;
}) => ({
  login: state.loginReducer,
  devices: state.devicesReducer,
  account: state.accountReducer,
  messages: state.messagesReducer,
});

export default connect(mapStateProps)(MensagensTab);
