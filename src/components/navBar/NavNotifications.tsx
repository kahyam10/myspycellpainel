import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  MenuDivider,
  Text,
  Button,
  IconButton,
  Badge,
  Kbd,
  Flex,
} from "@chakra-ui/core";
import { useRouter } from "next/router";
import React, { useCallback, useEffect } from "react";
import {
  MdHome,
  MdContacts,
  MdCall,
  MdTextsms,
  MdHistory,
  MdPhotoLibrary as MdGallery,
  MdMic,
  MdCameraAlt,
  MdInfo,
  MdSmartphone,
  MdNotifications,
} from "react-icons/md";
import {
  SiGooglemaps,
  SiGoogleplay,
  SiInstagram,
  SiTinder,
  SiWhatsapp,
  SiYoutube,
} from "react-icons/si";
import { getSmallTime } from "../../utils/dateFunctions";

type Props = {
  notifications: UpdateState;
  removeNotifications:(item:IUpdate)=>void;
  clearNotifications:()=>void;
};
const NavNotifications: React.FC<Props> = ({ notifications, removeNotifications, clearNotifications }) => {

    const route = useRouter();

  function getIcon(type: number) {
    switch (type) {
      case 1:
        return MdSmartphone;
      case 2:
        return MdContacts;
      case 3:
        return MdCall;
      case 4:
        return MdTextsms;
      case 5:
        return MdHistory;
      case 6:
        return SiYoutube;
      case 7:
        return MdGallery;
      case 8:
        return SiGooglemaps;
      case 9:
        return SiGoogleplay;
      case 20:
        return SiWhatsapp;
      case 21:
        return SiInstagram;
      case 22:
        return SiTinder;
      case 30:
        return MdCameraAlt;
      case 31:
        return MdMic;

      default:
        return MdInfo;
    }
  }
  function getText(type: number) {
    switch (type) {
      case 1:
        return "Dispositivo";
      case 2:
        return "Contatos";
      case 3:
        return "Ligações";
      case 4:
        return "SMS";
      case 5:
        return "Histórico";
      case 6:
        return "YouTube";
      case 7:
        return "Galeria";
      case 8:
        return "Localização";
      case 9:
        return "Aplicativos";
      case 20:
        return "Whatsapp";
      case 21:
        return "Instagram";
      case 22:
        return "Tinder";
      case 30:
        return "Camera";
      case 31:
        return "Microfone";
      default:
        return "";
    }
  }
  function getLink(type:number){
    switch (type) {
      case 1:
        return "resumo";
      case 2:
        return "contatos";
      case 3:
        return "ligacoes";
      case 4:
        return "mensagens";
      case 5:
        return "historico";
      case 6:
        return "youtube";
      case 7:
        return "galeria";
      case 8:
        return "localizacao";
      case 9:
        return "aplicativos";
      case 20:
        return "whatsapp";
      case 21:
        return "instagram";
      case 22:
        return "tinder";
      case 30:
        return "camera";
      case 31:
        return "escuta";
      default:
        return "";
    }
  }
  const navigateToNotification=(item:IUpdate)=>{
    removeNotifications(item);
    route.push(`/dashboard/${getLink(item.type)}`);
  }

  return (
    <Menu>
      <MenuButton
      display="flex"
      alignItems="end"
        padding={1}
        height="fit-content"
        transition="all 0.2s"
        _hover={{ bg: "blue.600" }}
        _expanded={{ bg: "blue.500" }}
        _focus={{ boxShadow: "outline" }}
      >
        <MdNotifications size="32px" />{" "}
        {notifications.state.length > 0 ? (
          <Badge backgroundColor="red.600" fontWeight="bold" marginLeft={-1} >
            {notifications.state.length}
          </Badge>
        ) : (
          ""
        )}
      </MenuButton>
      <MenuList zIndex={10} backgroundColor="gray.600" marginRight={32}>
        <Text
          color="blue.500"
          fontWeight="bold"
          fontSize={22}
          textAlign="center"
        >
          Últimas Atualizações
        </Text>

        <MenuDivider />
        {notifications.state.map((item: IUpdate) => {
          return (
            <MenuItem
              minH="40px"
              key={item.date_time}
              paddingTop={2}
              paddingBottom={2}
              onClick={()=>navigateToNotification(item)}
            >
              <Box as={getIcon(item.type)} size="24px" marginRight={2} />
              <Text>Atualização de {getText(item.type)}</Text>
              <Kbd marginLeft={2} fontSize="12px" color="blue.400">
                {getSmallTime(item.date_time)}
              </Kbd>
              <IconButton
                aria-label="Apagar Notificação"
                size="sm"
                onClick={e =>removeNotifications(item)}
                variant="ghost"
                icon="close"
                marginLeft={2}
                _hover={{ bg: "gray.700" }}
              />
            </MenuItem>
          );
        })}
        <MenuDivider />
        <Flex paddingX={2} paddingY={1}>
          <Button
            backgroundColor="blue.600"
            width="100%"
            onClick={clearNotifications}
            _hover={{
              backgroundColor: "blue.700",
            }}
          >
            Limpar Tudo
          </Button>
        </Flex>
      </MenuList>
    </Menu>
  );
};

export default NavNotifications;
