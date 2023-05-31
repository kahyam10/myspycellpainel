import React, { useState } from "react";
import { useRouter } from "next/router";
import {
  Grid,
  Flex,
  Heading,
  Input,
  Link,
  Button,
  Text,
  InputGroup,
  InputLeftElement,
  Icon,
  Image,
  useToast,
} from "@chakra-ui/core";

import logo from "../../assets/img/logo.svg";
import InputLogin from "../../components/input/InputLogin";

const RecoverPage = () => {
  const router = useRouter();
  const toast = useToast();

  const [email, setEmail] = useState("");
  
    function toggleRecoverPassword(){
        if (email.length > 0){
            toast({
                title: "Sucesso",
                description: "Email enviado com sucesso",
                status: "success",
                duration: 9000,
                isClosable: true,
              })
        }else{
            toast({
                title: "Erro",
                description: "Email não cadastrado",
                status: "error",
                duration: 9000,
                isClosable: true,
              })
        }
    }

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
          Recupere sua senha para ter acesso a nossa plataforma
        </Heading>
      </Flex>

      <Flex
        gridArea="form"
        height="100%"
        backgroundColor="gray.600"
        borderRadius="md"
        flexDir="column"
        justifyContent="center"
        alignItems="stretch"
        padding={16}
      >
        <InputGroup height="50px">
          <InputLeftElement
            height="50px"
            children={<Icon name="email" color="gray.400" />}
          />
          <InputLogin
            paddingLeft={10}
            placeholder="E-mail"
            type="email"
            value={email}
            onChange={(event: React.FormEvent<HTMLInputElement>) =>
              setEmail(event.currentTarget.value)
            }
            _active={{
              background: "gray.200",
            }}
          />
        </InputGroup>

        <Button
          backgroundColor="blue.500"
          marginTop={6}
          height="50px"
          onClick={()=>toggleRecoverPassword()}
          borderRadius="sm"
          _hover={{ backgroundColor: "blue.600" }}
        >
          RECUPERAR SENHA
        </Button>

        <Text textAlign="center" fontSize="sm" color="gray.300" marginTop={6}>
          Já recuperou sua senha?{" "}
          <Link
            href="/login"
            alignSelf="flex-start"
            marginTop={2}
            fontSize="sm"
            color="blue.500"
            fontWeight="bold"
            _hover={{ color: "blue.600" }}
          >
            Fazer Login
          </Link>
        </Text>
      </Flex>
    </Grid>
  );
};
export default RecoverPage;
