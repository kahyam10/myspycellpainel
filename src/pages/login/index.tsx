import React from "react";
import {
  Grid,
  Flex,
  Heading,
  Image,
} from "@chakra-ui/core";

import logo from "../../assets/img/logo.svg";

import LoginForm from "../../components/form/Login";

const LoginPage = () => {


  return (
    <Grid
      as="main"
      backgroundColor="gray.800"
      height="100vh"
      templateColumns="1fr 480px 480px 1fr"
      templateRows="1fr 480 1fr"
      templateAreas="
  '. . . .'
  '. logo form .'
  '. . . .'
  "
      justifyContent="center"
      alignItems="center"
    >
      <Flex gridArea="logo" flexDir="column" alignItems="flex-start">
        <Image src={logo} alt="logo" width="400px" />
        <Heading size="xl" lineHeight="shorter" marginTop={10} maxWidth="450px">
          Faça seu login na nossa plataforma
        </Heading>
      </Flex>
      <Flex
      height="100%"
      width="100%"
      gridArea="form"
      >
    <LoginForm/>
      </Flex>
    </Grid>
  );
};
export default LoginPage;
