import React, { useEffect, useState } from "react";
import { Flex } from "@chakra-ui/core";

import { connect } from "react-redux";
import TabContainer from "../../container/TabContainer";
import InstagramList from "./InstagramList";
type Props = {
  account: AccountState;
  devices: DevicesState;
  instagram: InstagramState;
};

const InstagramTab: React.FC<Props> = ({ account, devices, instagram }) => {
  console.log(instagram);
  return (
    <TabContainer>
      <InstagramList instagram={instagram.state} />
    </TabContainer>
  );
};

const mapStateProps = (state: {
  devicesReducer: DevicesState;
  accountReducer: AccountState;
  instagramReducer: InstagramState;
}) => ({
  devices: state.devicesReducer,
  account: state.accountReducer,
  instagram: state.instagramReducer,
});

export default connect(mapStateProps)(InstagramTab);
