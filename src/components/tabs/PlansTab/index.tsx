import React, { useEffect, useState } from "react";
import { Box, Grid, Flex, Text, Heading } from "@chakra-ui/core";

import { connect } from "react-redux";
import TabContainer from "../../container/TabContainer";
import PlanList from "./PlanList";

type Props = {
  account: AccountState;
  login: LoginState;
  plan: PlanState;
};

const PlansTab: React.FC<Props> = ({ account, login, plan }) => {
  return (
    <TabContainer>
      <Flex as="main" flexDir="column">
        <PlanList account={account} login={login} plan={plan} />
      </Flex>
    </TabContainer>
  );
};

const mapStateProps = (state: {
  accountReducer: AccountState;
  loginReducer: LoginState;
  planReducer: PlanState;
}) => ({
  login: state.loginReducer,
  account: state.accountReducer,
  plan: state.planReducer,
});

export default connect(mapStateProps)(PlansTab);
