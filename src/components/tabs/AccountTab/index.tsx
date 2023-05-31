import React, { useEffect, useState } from "react";
import { Box, Grid, Flex, Text, Heading } from "@chakra-ui/core";

import { connect } from "react-redux";
import TabContainer from "../../container/TabContainer";
import AccountSettings from "./AccountSettings";

type Props = {
  account: AccountState;
  devices: DeviceState;
  login: LoginState;
  plan: PlanState;
  user:UserState;
};

const AccountTab: React.FC<Props> = ({ account, devices, login, plan, user }) => {
  return (
    <TabContainer>
      <Flex as="main" flexDir="column">
        <AccountSettings
          account={account}
          devices={devices}
          login={login}
          plan={plan}
          user={user}
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
  userReducer:UserState;
}) => ({
  login: state.loginReducer,
  devices: state.devicesReducer,
  account: state.accountReducer,
  plan: state.planReducer,
  user:state.userReducer,
});

export default connect(mapStateProps)(AccountTab);
