import React, { useEffect, useState } from "react";
import { Flex } from "@chakra-ui/core";

import { connect } from "react-redux";
import LocationList from "./LocationList";
import TabContainer from "../../container/TabContainer";
type Props = {
  account: AccountState;
  devices: DeviceState;
  login: LoginState;
  location: LocationState;
};

const LocalizacaoTab: React.FC<Props> = ({ account, devices, location, login }) => {
  const [currentLocation, setCurrentLocation] = useState<ILocation>(
    location.state[0]
  );

  return ( 
    <TabContainer>
      <Flex as="main" flexDir="column">
        <LocationList
          locations={location.state}
          currentLocation={currentLocation}
          setCurrentLocation={setCurrentLocation}
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
  locationReducer: LocationState;
}) => ({
  login: state.loginReducer,
  devices: state.devicesReducer,
  account: state.accountReducer,
  location: state.locationReducer,
});

export default connect(mapStateProps)(LocalizacaoTab);
