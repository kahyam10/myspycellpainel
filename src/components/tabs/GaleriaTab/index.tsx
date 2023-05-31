import React, { useEffect, useState } from "react";
import { Flex, } from "@chakra-ui/core";

import { connect } from "react-redux";
import GalleryList from "./GalleryList";
type Props = {
  account: AccountState;
  devices: DeviceState;
  gallery: GalleryState;
  galleryWhatsapp: GalleryState;
};

const GaleriaTab: React.FC<Props> = ({ account, devices, gallery, galleryWhatsapp }) => {
  return (
    <Flex as="main" backgroundColor="gray.800" flexDir="column">
      <GalleryList gallery={gallery.state}/>
    </Flex>
  );
};

const mapStateProps = (state: {
  devicesReducer: DeviceState;
  accountReducer: AccountState;
  galleryReducer:GalleryState;
  galleryWhatsappReducer:GalleryState
}) => ({
  devices: state.devicesReducer,
  account: state.accountReducer,
  gallery: state.galleryReducer,
  galleryWhatsapp: state.galleryWhatsappReducer,
});

export default connect(mapStateProps)(GaleriaTab);
