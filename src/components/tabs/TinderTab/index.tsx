import React, { useEffect, useState } from "react";
import { Flex, } from "@chakra-ui/core";

import { connect } from "react-redux";
import TabContainer from "../../container/TabContainer";
import TinderList from "./TinderList";
type Props = {
  account: AccountState;
  devices: DevicesState;
  Tinder:TinderState
};

const TinderTab: React.FC<Props> = ({ account, devices, Tinder }) => {
  console.log(Tinder)
  return (
    <TabContainer>
      <TinderList Tinder={Tinder.state}/>
    </TabContainer>
  );
};


const mapStateProps = (state: {
  devicesReducer: DevicesState;
  accountReducer: AccountState;
  tinderReducer: TinderState;
}) => ({
  devices: state.devicesReducer,
  account: state.accountReducer,
  Tinder: state.tinderReducer,
});

export default connect(mapStateProps)(TinderTab);
