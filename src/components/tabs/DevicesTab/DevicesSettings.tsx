import { Flex, Grid } from "@chakra-ui/core";
import React from "react";
import {
  MdAndroid,
  MdDataUsage,
  MdDevices,
  MdLabel,
  MdPhone,
  MdSmartphone,
  MdTouchApp,
} from "react-icons/md";
import TabTitle from "../../text/tabTitle";
import DeviceItem from "./DeviceItem";
type Props = {
  account: AccountState;
  devices: DeviceState;
  login: LoginState;
  plan: PlanState;
};
const AccountSettings: React.FC<Props> = ({
  account,
  devices,
  login,
  plan,
}) => {
  console.log(devices);
  return (
    <Flex flexDir="column" width="100%" padding={6}>
      <TabTitle>Dispositivos Cadastrados</TabTitle>
      {devices.state.length > 0
        ? devices.state.map((item: IDevice) => {
            return <DeviceItem device={item} />;
          })
        : "Nenhum Dispositivo cadastrado"}
    </Flex>
  );
};

export default AccountSettings;
