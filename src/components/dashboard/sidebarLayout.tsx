import React from "react";
import { Flex, Image, Button, ButtonGroup, Text, Box } from "@chakra-ui/core";

import {
  MdHome,
  MdContacts,
  MdCall,
  MdTextsms,
  MdHistory,
  MdPhotoLibrary as MdGallery,
  MdMic,
  MdCameraAlt,
  MdFullscreen as MdPrintScreen

} from "react-icons/md";
import {SiGooglemaps, SiGoogleplay, SiInstagram, SiTinder, SiWhatsapp, SiYoutube} from "react-icons/si"



import ButtonSidebar from "../button/buttonSidebar";
// import { Container } from './styles';

const SidebarLayout: React.FC = () => {
  return (
    <Flex
      height="100%"
      flexDir="column"
      justifyContent="flex-start"
      alignItems="center"
      paddingY={6}
      paddingX={2}
      backgroundColor="gray.800"
      width="100%"
    >
      

      <ButtonGroup width="100%" spacing={4} marginLeft={1}>

        <ButtonSidebar icon={MdHome} link="/resumo" name="Início"/>
        <ButtonSidebar icon={MdContacts} link="/contatos" name="Contatos"/>
        <ButtonSidebar icon={MdCall} link="/ligacoes" name="Ligações"/>
        <ButtonSidebar icon={MdTextsms} link="/mensagens" name="Mensagens"/>
        <ButtonSidebar icon={MdHistory} link="/historico" name="Histórico"/>
        <ButtonSidebar icon={SiYoutube} link="/youtube" name="YouTube"/>
        <ButtonSidebar icon={MdGallery} link="/galeria" name="Galeria"/>
        <ButtonSidebar icon={SiGooglemaps} link="/localizacao" name="Localização"/>
        <ButtonSidebar icon={SiGoogleplay} link="/aplicativos" name="Aplicativos"/>
        <ButtonSidebar icon={SiWhatsapp} link="/whatsapp" name="WhatsApp"/>
        <ButtonSidebar icon={SiInstagram} link="/instagram" name="Instagram"/>
        <ButtonSidebar icon={SiTinder} link="/tinder" name="Tinder"/>
        <ButtonSidebar icon={MdMic} link="/escuta" name="Escuta"/>
        <ButtonSidebar icon={MdCameraAlt} link="/camera" name="Câmera"/>
        <ButtonSidebar icon={MdPrintScreen} link="/print" name="Captura de Tela"/>

      </ButtonGroup>
    </Flex>
  );
};

export default SidebarLayout;
