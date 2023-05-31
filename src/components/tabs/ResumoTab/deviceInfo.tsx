import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Flex,
  FlexProps,
  Text,
  Heading,
  Button,
  Divider,
  CircularProgress,
} from "@chakra-ui/core";

import { connect } from "react-redux";

import {
  MdStayPrimaryPortrait as MdSmartPhone,
  MdPermDeviceInformation,
  MdAndroid,
  MdUpdate,
  MdDateRange,
  MdWifi,
  MdPermScanWifi,
  MdBattery80,
  MdMemory,
  MdSdStorage,
} from "react-icons/md";
import InfoItem from "../../item/infoItem";
import { getSmallDate } from "../../../utils/dateFunctions";

type Props = {
  device?: IDevice;
};

const DeviceInfo: React.FC<Props> = ({ device }) => {
  
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
        Informações do dispositivo
      </Heading>
      {device ? (
        <>
          <InfoItem
            item_name="Nome"
            item_icon={MdPermDeviceInformation}
            item_value={device?.name}
            item_space={4}
          />
          <InfoItem
            item_name="Modelo"
            item_icon={MdSmartPhone}
            item_value={device?.model}
            item_space={2}
          />
          <InfoItem
            item_name="Android"
            item_icon={MdAndroid}
            item_value={device?.android_version}
            item_space={2}
          />
          <InfoItem
            item_name="Visto por último"
            item_icon={MdUpdate}
            item_value={
              device.last_update != undefined
                ? getSmallDate(Number.parseInt(device.last_update))
                : ""
            }
            item_space={2}
          />
          <InfoItem
            item_name="Data de registro"
            item_icon={MdDateRange}
            item_value={
              device.activation_date != undefined
                ? getSmallDate(Number.parseInt(device.activation_date))
                : ""
            }
            item_space={2}
          />
          <InfoItem
            item_name="Conexão atual"
            item_icon={MdWifi}
            item_value={device?.connection_type}
            item_space={2}
          />
          <InfoItem
            item_name="Nome da conexão"
            item_icon={MdPermScanWifi}
            item_value={device?.ssid}
            item_space={2}
          />
          <InfoItem
            item_name="Bateria"
            item_icon={MdBattery80}
            item_value={device?.battery_level}
            item_space={2}
          />
          <InfoItem
            item_name="Memóriam RAM"
            item_icon={MdMemory}
            item_value={device?.ram_level}
            item_space={2}
          />
          <InfoItem
            item_name="Armazenamento"
            item_icon={MdSdStorage}
            item_value={device?.internal_storage_level}
            item_space={2}
          />
        </>
      ) : (
        <Flex width="100%" justifyContent="center" flexDir="column" alignItems="center">
          <CircularProgress
            isIndeterminate
            color="blue"
            trackColor="red"
            thickness={0.3}
            size="2rem"
            capIsRound
          />
          <Text marginTop={2}>
            Carregando dados do dispositivo.
          </Text>
        </Flex>
      )}

    </Flex>
  );
};

export default DeviceInfo;
