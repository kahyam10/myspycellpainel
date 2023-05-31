import React, { useEffect, useState } from "react";
import { Flex } from "@chakra-ui/core";

import { connect } from "react-redux";
import TabContainer from "../../container/TabContainer";
import TabTitle from "../../text/tabTitle";
type Props = {
  account: AccountState;
  devices: DeviceState;
  login: LoginState;
};

const EscutaTab: React.FC<Props> = ({ account, devices, login }) => {
  var acc = account.state;

  return (
    <TabContainer>
      <Flex as="main" flexDir="column">
        <Flex flexDir="column" width="100%" padding={6}>
          <TabTitle>Escuta</TabTitle>
        </Flex>
      </Flex>
    </TabContainer>
  );
};

const mapStateProps = (state: {
  devicesReducer: DeviceState;
  accountReducer: AccountState;
  loginReducer: LoginState;
}) => ({
  login: state.loginReducer,
  devices: state.devicesReducer,
  account: state.accountReducer,
});

export default connect(mapStateProps)(EscutaTab);
