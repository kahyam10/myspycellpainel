import React, { useEffect, useState } from "react";
import { Box, Grid, Flex, Text, Heading } from "@chakra-ui/core";

import { connect } from "react-redux";
import TabContainer from "../../container/TabContainer";
import DevicesSettings from "./DevicesSettings";

type Props = {
  account: AccountState;
  devices: DeviceState;
  login: LoginState;
  plan: PlanState;
};

const DevicesTab: React.FC<Props> = ({ account, devices, login, plan }) => {
  return (
    <TabContainer>
      <Flex as="main" flexDir="column">
        <DevicesSettings
          account={account}
          devices={devices}
          login={login}
          plan={plan}
        />
      </Flex>
    </TabContainer>
  );
};

const mapStateProps = (state: {
  devicesReducer: DeviceState;
  accountReducer: AccountState;
  loginReducer: LoginState;
  planReducer: PlanState;
}) => ({
  login: state.loginReducer,
  devices: state.devicesReducer,
  account: state.accountReducer,
  plan: state.planReducer,
});

export default connect(mapStateProps)(DevicesTab);
