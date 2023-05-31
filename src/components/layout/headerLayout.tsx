import React from "react";
import {useRouter} from "next/router";
import { Link, Flex, Image, Button, ButtonGroup } from "@chakra-ui/core";

import logo from "../../assets/img/logo.svg";
// import { Container } from './styles';

const HeaderLayout: React.FC = () => {
  var router = useRouter();

  return (
    <header>
      <Flex
        width="100vw"
        height="100px"
        paddingX={16}
        paddingY={2}
        flexDir="row"
        justifyContent="space-between"
        alignItems="center"
        position="fixed"
        zIndex={1000}
      >
        <Image src={logo} alt="logo" width="150px" />

        <ButtonGroup spacing={4}>
          <Button variant="ghost">Como funciona</Button>

          <Button variant="ghost">Funções</Button>

          <Button variant="ghost">Planos</Button>

          <Button variant="ghost">Vantagens</Button>

          <Button variant="ghost">Como instalar</Button>
        </ButtonGroup>

        <ButtonGroup spacing={4}>
          <Button 
          variant="solid"
          backgroundColor="blue.500"
          _hover={{
            backgroundColor:"blue.600"
          }}
          onClick={()=>router.push("/login")}
          >
            Entrar
          </Button>

          <Button 
          variant="outline"
          onClick={()=>router.push("/register")}
          >
            Cadastrar-se
          </Button>
        </ButtonGroup>
      </Flex>
    </header>
  );
};

export default HeaderLayout;
