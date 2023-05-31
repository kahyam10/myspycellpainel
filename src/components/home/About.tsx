import { Flex } from "@chakra-ui/core";
import React from "react";
import TextBody from "./components/TextBody";
import TextTitle from "./components/TextTitle";

// import { Container } from './styles';

const About: React.FC = () => {
  return (
    <Flex flexDir="column" padding={16}>
      <TextTitle>O Que é o MySpyCell?</TextTitle>
      <TextBody>
        o MySpyCell é um sistema de monitoramento para celulares e tablets
        Android, os dados são monitorados através de um aplicativo que deve ser
        instalado no dispositivo a ser monitorado, e os dados são exibidos em um
        painel no nosso site.
      </TextBody>
      <TextBody>
        Todos os dados monitorados pelo MySpyCell são criptografados e somento o
        usuário tem acesso aos dados no painel. o Aplicativo fica invisível no
        celular que está sendo monitorado.
      </TextBody>
    </Flex>
  );
};

export default About;
