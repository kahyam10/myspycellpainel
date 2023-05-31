import React, { useEffect, useState } from "react";
import { Box, Grid, Flex} from "@chakra-ui/core";
import AccountInfo from "./accountInfo";
import DeviceSelector from "./deviceSelector";
import { connect } from "react-redux";
import AppInfo from "./appInfo";
type Props = {
  login: LoginState;
  user: UserState;
  account: AccountState;
  plan: PlanState;
  devices: DeviceState;
};

const ResumoTab: React.FC<Props> = ({
  user,
  account,
  plan,
  devices,
  login,
}) => {
  //account state active device in []
  return (
    <Flex>
      <Grid
        as="main"
        width="60%"
        backgroundColor="gray.800"
        templateColumns="1fr"
        gridColumnGap={4}
        gridRowGap={4}
        padding={2}
      >
        <Box>
          <AccountInfo
            account={account.state}
            user={user.state}
            plan={plan.state}
          />
        </Box>

        
      </Grid>

      <Grid
        
        width="40%"
        templateColumns="1fr"
        gridColumnGap={4}
        gridRowGap={4}
        padding={2}
      >
        <Box>
          <DeviceSelector
            devices={devices.state}
            login={login.state}
            account={account.state}
            activeDevice={account.state?.active_device}
          />
        </Box>
        <Box>
          <AppInfo device={account.state?.active_device} />
        </Box>
      </Grid>
    </Flex>
  );
};

const mapStateProps = (state: {
  loginReducer: LoginState;
  devicesReducer: DeviceState;
  accountReducer: AccountState;
  planReducer: PlanState;
  userReducer: UserState; 
}) => ({
  login: state.loginReducer,
  devices: state.devicesReducer,
  account: state.accountReducer,
  plan: state.planReducer,
  user: state.userReducer,
});

export default connect(mapStateProps)(ResumoTab);
