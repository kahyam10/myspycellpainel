import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  MenuDivider,
} from "@chakra-ui/core";
import { useRouter } from "next/router";
import React from "react";
import {
  MdMenu,
  MdAccountBox,
  MdShoppingCart,
  MdDevices,
  MdExitToApp,
} from "react-icons/md";

// import { Container } from './styles';

const NavMenu: React.FC = () => {
  const route = useRouter();
  return (
    <Menu>
      <MenuButton
        padding={1}
        height="fit-content"
        transition="all 0.2s"
        _hover={{ bg: "blue.600" }}
        _expanded={{ bg: "blue.500" }}
        _focus={{ boxShadow: "outline" }}
      >
        <MdMenu size="32px" />
      </MenuButton>
      <MenuList zIndex={10} backgroundColor="gray.600" marginRight={8}>
        <MenuItem minH="40px" onClick={()=>route.push("/dashboard/conta")}>
          <Box as={MdAccountBox} size="24px" marginRight={4} /> Conta
        </MenuItem>
        <MenuItem minH="40px" onClick={()=>route.push("/dashboard/planos")}>
          <Box as={MdShoppingCart} size="24px" marginRight={4} /> Planos
        </MenuItem>
        <MenuItem minH="40px" onClick={()=>route.push("/dashboard/dispositivos")}>
          {" "}
          <Box as={MdDevices} size="24px" marginRight={4} />
          Dispositivos
        </MenuItem>
        <MenuDivider />
        <MenuItem minH="40px" color="red.500">
          <Box as={MdExitToApp} size="24px" color="red.500" marginRight={4} />
          Sair
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default NavMenu;
