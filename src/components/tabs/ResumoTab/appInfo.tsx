import { Button, Flex, Heading } from "@chakra-ui/core";
import React from "react";
import {
  MdCall,
  MdCameraAlt,
  MdCenterFocusWeak,
  MdGpsFixed,
  MdMic,
  MdPermContactCalendar,
  MdPermDeviceInformation,
  MdPhonelinkSetup,
  MdSdStorage,
  MdSecurity,
  MdSms,
  MdSync,
} from "react-icons/md";
import InfoItem from "../../item/infoItem";

type Props = {
  device?: IDevice;
};

const Appinfo: React.FC<Props> = ({ device }) => {

  function GetColor(value:any):string{
    if (value==1){
      return "green.500";
    }else{
      return "red.500";
    }
  }

  function GetStatus(value:any):string{
    if (value ==1){
      return "Habilitado";
    }else{
      return "Não Habilitado"
    }
  }

  return (
    <Flex
      gridArea="logo"
      flexDir="column"
      backgroundColor="gray.600"
      width="100%"
      borderRadius={4}
      padding={4}
    >
      <Heading color="blue.500" fontWeight="bold" fontSize="26px">
        Status de Monitoramento
      </Heading>

      <InfoItem
        item_name="Versão do MySpyCell"
        item_icon={MdPermDeviceInformation}
        item_value={device?.apk_version}
        item_space={4}
      />
      <InfoItem
        item_name="Serviço de Captura"
        item_icon={MdCenterFocusWeak}
        item_value={GetStatus(device?.status_chat_service)}
        item_space={2}
        item_color={GetColor(device?.status_chat_service)}
      />
      <InfoItem
        item_name="Serviço em Tempo Real"
        item_icon={MdSync}
        item_value={GetStatus(device?.status_extras_service)}
        item_space={2}
        item_color={GetColor(device?.status_extras_service)}
      />
      <InfoItem
        item_name="Modo Administrador"
        item_icon={MdSecurity}
        item_value={GetStatus(device?.status_admin) }
        item_space={2}
        item_color={GetColor(device?.status_admin)}
      />
      <InfoItem
        item_name="Acesso a Câmera"
        item_icon={MdCameraAlt}
        item_value={GetStatus(device?.camera)}
        item_space={2}
        item_color={GetColor(device?.camera)}

      />
      <InfoItem
        item_name="Acesso aos Contatos"
        item_icon={MdPermContactCalendar}
        item_value={GetStatus(device?.contacts)}
        item_space={2}
        item_color={GetColor(device?.contacts)}
      />
      <InfoItem
        item_name="Acesso ao GPS"
        item_icon={MdGpsFixed}
        item_value={GetStatus(device?.location)}
        item_space={2}
        item_color={GetColor(device?.location)}
      />
      <InfoItem
        item_name="Acesso ao Microfone"
        item_icon={MdMic}
        item_value={GetStatus(device?.mic)}
        item_space={2}
        item_color={GetColor(device?.mic)}
      />
      <InfoItem
        item_name="Acesso ao Armazenamento"
        item_icon={MdSdStorage}
        item_value={GetStatus(device?.storage)}
        item_space={2}
        item_color={GetColor(device?.storage)}
      />
      <InfoItem
        item_name="Acesso ao Telefone"
        item_icon={MdPhonelinkSetup}
        item_value={GetStatus(device?.telephony)}
        item_space={2}
        item_color={GetColor(device?.telephony)}
      />
      <InfoItem
        item_name="Acesso as Ligações"
        item_icon={MdCall}
        item_value={GetStatus(device?.calls)}
        item_space={2}
        item_color={GetColor(device?.calls)}
      />
      <InfoItem
        item_name="Acesso as Mensagens SMS"
        item_icon={MdSms}
        item_value={GetStatus(device?.sms)}
        item_space={2}
        item_color={GetColor(device?.sms)}
      />
    </Flex>
  );
};

export default Appinfo;
