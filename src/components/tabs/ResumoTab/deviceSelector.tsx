import { Box, Flex, Text, Heading, Select, Button } from "@chakra-ui/core";
import React, { useEffect, useState } from "react";
import {
  MdStayPrimaryPortrait as MdSmartPhone,
  MdAccessTime,
  MdAndroid,
  MdHistory,
  MdBattery80,
  MdDateRange,
  MdMemory,
  MdPermDeviceInformation,
  MdPermScanWifi,
  MdSdStorage,
  MdUpdate,
  MdWifi,
} from "react-icons/md";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import {
  SetAccount,
  SetActiveDevice,
} from "../../../store/actions/accountActions";
import { getSmallDate } from "../../../utils/dateFunctions";
import InfoItem from "../../item/infoItem";

type Props = {
  account: IAccount | null;
  devices: IDevice[];
  login: ILogin | null;
  activeDevice?: IDevice;
};

type Selection = {
  name: string;
  last_update: string;
  model: string;
  reg_id: string;
};

const DeviceSelector: React.FC<Props> = ({
  account,
  devices,
  login,
  activeDevice,
}) => {
  // const [activeDevice, setActiveDevice] = useState<IDevice>(devices[0]);
  const [devicesList, setDevicesList] = useState<Selection[]>();
  const dispatch: Dispatch<any> = useDispatch();

  function toggleActiveDevice(reg_id: string) {
    devices.map((item: IDevice) => {
      if (item.reg_id === reg_id) {
        dispatch(SetActiveDevice(item));
      }
    });
  }

  useEffect(() => {
    var list: Selection[] = [];
    if (devices) {
      devices.forEach((item: IDevice) => {
        var info: Selection = {
          name: item.name,
          model: item.model,
          last_update: item.last_update,
          reg_id: item.reg_id,
        };
        list.push(info);
      });
    }
    setDevicesList(list);
  }, [devices, account]);

  return (
    <Flex
      gridArea="device-selector"
      flexDir="column"
      backgroundColor="gray.600"
      width="100%"
      borderRadius={4}
      padding={4}
    >
      <Heading color="blue.500" fontWeight="bold" fontSize="26px">
        Selecionar Dispositivo
      </Heading>

      <Select
        marginTop={4}
        variant="filled"
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          toggleActiveDevice(e.currentTarget.value)
        }
      >
        {devicesList?.map((item: Selection) => {
          return (
            <Box
              as="option"
              backgroundColor="gray.600"
              color="gray.200"
              value={item.reg_id}
              key={item.reg_id}
            >
              {item.name}
            </Box>
          );
        })}
      </Select>

      <InfoItem
            item_name="Nome"
            item_icon={MdPermDeviceInformation}
            item_value={activeDevice?.name}
            item_space={4}
          />
          <InfoItem
            item_name="Modelo"
            item_icon={MdSmartPhone}
            item_value={activeDevice?.model}
            item_space={2}
          />
          <InfoItem
            item_name="Android"
            item_icon={MdAndroid}
            item_value={activeDevice?.android_version}
            item_space={2}
          />
          <InfoItem
            item_name="Visto por último"
            item_icon={MdUpdate}
            item_value={
              activeDevice?.last_update != undefined
                ? getSmallDate(Number.parseInt(activeDevice.last_update))
                : ""
            }
            item_space={2}
          />
          <InfoItem
            item_name="Data de registro"
            item_icon={MdDateRange}
            item_value={
              activeDevice?.activation_date != undefined
                ? getSmallDate(Number.parseInt(activeDevice.activation_date))
                : ""
            }
            item_space={2}
          />
          <InfoItem
            item_name="Conexão atual"
            item_icon={MdWifi}
            item_value={activeDevice?.connection_type}
            item_space={2}
          />
          <InfoItem
            item_name="Nome da conexão"
            item_icon={MdPermScanWifi}
            item_value={activeDevice?.ssid}
            item_space={2}
          />
          <InfoItem
            item_name="Bateria"
            item_icon={MdBattery80}
            item_value={activeDevice?.battery_level}
            item_space={2}
          />
          <InfoItem
            item_name="Memóriam RAM"
            item_icon={MdMemory}
            item_value={activeDevice?.ram_level}
            item_space={2}
          />
          <InfoItem
            item_name="Armazenamento"
            item_icon={MdSdStorage}
            item_value={activeDevice?.internal_storage_level}
            item_space={2}
          />
      {activeDevice != undefined ? (
        <InfoItem
          item_name="Última atualização"
          item_icon={MdHistory}
          item_value={getSmallDate(
            Number.parseInt(activeDevice.activation_date)
          )}
          item_space={2}
        />
      ) : (
        <></>
      )}

      <Button
        backgroundColor="blue.600"
        width="100%"
        borderRadius={4}
        marginTop={6}
        _hover={{
          backgroundColor: "blue.700",
        }}
      >
        Gerenciar dispositivos
      </Button>
    </Flex>
  );
};

export default DeviceSelector;
