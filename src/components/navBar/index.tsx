import { Flex, Image } from "@chakra-ui/core";
import React, { useEffect } from "react";
import { MdSmartphone, MdInfo } from "react-icons/md";

// import { Container } from './styles';
import logo from "../../assets/img/logo.svg";
import NavItem from "./NavItem";
import NavMenu from "./NavMenu";
import NavNotifications from "./NavNotifications";

type Props = {
  login: LoginState;
  user: UserState;
  account: AccountState;
  plan: PlanState;
  notifications: UpdateState;
  removeNotifications: (item: IUpdate) => void;
  clearNotifications: () => void;
};

const NavbarLayout: React.FC<Props> = ({
  login,
  user,
  account,
  plan,
  notifications,
  removeNotifications,
  clearNotifications,
}) => {
  return (
    <Flex flexDir="column" width="100%">
      <Flex backgroundColor="gray.800" width="100%" height={16} paddingX={6}>
        <Image src={logo} alt="logo" width="120px" />
        <Flex width="100%">
          <NavItem
            item_name="Dispositivo"
            item_icon={MdSmartphone}
            item_value={
              account.state?.active_device
                ? account.state.active_device.name
                : "Nenhum"
            }
            item_space={20}
          />
          <NavItem
            item_name="Status"
            item_icon={MdInfo}
            item_value={"conectado"}
            item_color={"green.500"}
            item_space={4}
          />
        </Flex>
        <Flex
          width="200px"
          alignItems="center"
          height="100%"
          justifyContent="space-around"
        >
          <NavNotifications
            notifications={notifications}
            removeNotifications={removeNotifications}
            clearNotifications={clearNotifications}
          />
          <NavMenu />
        </Flex>
      </Flex>
      <Flex width="100%" height={0.5} backgroundColor="gray.600" />
    </Flex>
  );
};

export default NavbarLayout;
