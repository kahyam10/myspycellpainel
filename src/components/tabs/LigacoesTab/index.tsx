import React, { useEffect, useState } from "react";
import { Box, Grid, Flex, Text, Heading } from "@chakra-ui/core";

import { connect } from "react-redux";
import CallList from "./CallList";
import TabContainer from "../../container/TabContainer";

type Props = {
  calls: CallState;
  account: AccountState;
  devices: DeviceState;
  login: LoginState;
};

const ContatosTab: React.FC<Props> = ({ calls, account, devices, login }) => {
  return (
    <TabContainer>
      <Flex as="main" flexDir="column">
        <CallList calls={calls.state} account={account.state} login={login.state}/>
      </Flex>
    </TabContainer>
  );
};

const mapStateProps = (state: {
  devicesReducer: DeviceState;
  accountReducer: AccountState;
  loginReducer: LoginState;
  callsReducer: CallState;
}) => ({
  login: state.loginReducer,
  devices: state.devicesReducer,
  account: state.accountReducer,
  calls: state.callsReducer,
});

export default connect(mapStateProps)(ContatosTab);
