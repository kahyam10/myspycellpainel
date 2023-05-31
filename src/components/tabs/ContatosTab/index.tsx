import React, { useEffect, useState } from "react";
import { Box, Grid, Flex, Text, Heading } from "@chakra-ui/core";

import { connect } from "react-redux";
import ContactList from "./ContactList";
import TabContainer from "../../container/TabContainer";

type Props = {
  contacts: ContactState;
  account: AccountState;
  devices: DeviceState;
  login: LoginState;
};

const ContatosTab: React.FC<Props> = ({
  contacts,
  account,
  devices,
  login,
}) => {
  return (
    <TabContainer>
      <Flex as="main" flexDir="column">
        <ContactList
          contacts={contacts.state}
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
  contactsReducer: ContactState;
}) => ({
  login: state.loginReducer,
  devices: state.devicesReducer,
  account: state.accountReducer,
  contacts: state.contactsReducer,
});

export default connect(mapStateProps)(ContatosTab);
