import { Flex, Grid } from "@chakra-ui/core";
import React from "react";
import {
  MdSmartphone,
  MdLabel,
  MdDataUsage,
  MdAndroid,
  MdTouchApp,
  MdDateRange,
  MdPermDeviceInformation,
} from "react-icons/md";
import { getFullDate } from "../../../utils/dateFunctions";
import InfoItem from "../../item/infoItem";

type Props = {
  device: IDevice;
};

const DeviceItem: React.FC<Props> = ({ device }) => {
  return (
    <Flex
      flexDir="row"
      key={device.id}
      alignItems="center"
      padding={4}
      borderRadius={8}
      backgroundColor="gray.800"
    >
      <MdSmartphone size={72} color="blue.500"/>
      <Grid templateColumns="1fr 1fr" rowGap={2} width="100%" marginLeft={2}>
        <Grid rowGap={2}>
          <InfoItem
            item_name="Nome"
            item_icon={MdLabel}
            item_value={device.name}
            item_space={0}
          />
          <InfoItem
            item_name="Data de ativação"
            item_icon={MdDateRange}
            item_value={getFullDate(Number.parseInt(device.activation_date))}
            item_space={0}
          />
          <InfoItem
            item_name="Android"
            item_icon={MdAndroid}
            item_value={device.android_version}
            item_space={0}
          />
          <InfoItem
            item_name="MySpyCell"
            item_icon={MdPermDeviceInformation}
            item_value={device.apk_version + " (atualizado)"}
            item_space={0}
          />
        </Grid>
      </Grid>
    </Flex>
  );
};

export default DeviceItem;
