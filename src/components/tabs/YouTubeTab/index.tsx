import React, { useEffect, useState } from "react";
import { Flex } from "@chakra-ui/core";

import { connect } from "react-redux";
import YouTubeList from "./YouTubeList";
import TabContainer from "../../container/TabContainer";
type Props = {
  account: AccountState;
  devices: DeviceState;
  login: LoginState;
  youtube: YoutubeState;
};

const YouTubeTab: React.FC<Props> = ({ account, devices, login, youtube }) => {
  return (
    <TabContainer>
      <Flex as="main" flexDir="column">
        <YouTubeList
          youtube={youtube.state}
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
  youtubeReducer: YoutubeState;
}) => ({
  login: state.loginReducer,
  devices: state.devicesReducer,
  account: state.accountReducer,
  youtube: state.youtubeReducer,
});

export default connect(mapStateProps)(YouTubeTab);
