import React from "react";

import { connect } from "react-redux";
import TabContainer from "../../container/TabContainer";
import AppList from "./AppList";
type Props = {
  account: AccountState;
  devices: DeviceState;
  login: LoginState;
  apps: AppState;
};

const AplicativosTab: React.FC<Props> = ({ login, account, devices, apps }) => {
  return (
    <TabContainer>
      <AppList apps={apps.state} account={account.state} login={login.state} />
    </TabContainer>
  );
};

const mapStateProps = (state: {
  devicesReducer: DeviceState;
  accountReducer: AccountState;
  loginReducer: LoginState;
  appsReducer: AppState;
}) => ({
  login: state.loginReducer,
  devices: state.devicesReducer,
  account: state.accountReducer,
  apps: state.appsReducer,
});

export default connect(mapStateProps)(AplicativosTab);
