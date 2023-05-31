import React, { useEffect, useState } from "react";
import { Flex } from "@chakra-ui/core";

import { connect } from "react-redux";
import HistoryList from "./HistoryList";
import TabContainer from "../../container/TabContainer";
type Props = {
  account: AccountState;
  devices: DeviceState;
  login: LoginState;
  histories: HistoryState;
};

const HistoricoTab: React.FC<Props> = ({ account, devices, login,  histories }) => {
  

  return (
    <TabContainer>
      <Flex as="main" flexDir="column">
        <HistoryList
          histories={histories.state}
          account={account.state}
          login={login.state}
        />
      </Flex>
    </TabContainer>
  );
};

const mapStateProps = (state: {
  devicesReducer: DeviceState;
  accountReducer: AccountState;
  loginReducer: LoginState;
  historyReducer: HistoryState;
}) => ({
  login: state.loginReducer,
  devices: state.devicesReducer,
  account: state.accountReducer,
  histories: state.historyReducer,
});

export default connect(mapStateProps)(HistoricoTab);
