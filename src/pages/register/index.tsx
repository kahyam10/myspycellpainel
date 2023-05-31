import React, { useState } from "react";
import { useRouter } from "next/router";
import * as EmailValidator from "email-validator";
import {
  Grid,
  Flex,
  Heading,
  Link,
  Button,
  Text,
  Image,
  useToast,
} from "@chakra-ui/core";

import logo from "../../assets/img/logo.svg";
import InputLogin from "../../components/input/InputLogin";
import Api from "../../services/Api";

const RegisterPage = () => {
  var router = useRouter();
  var toast = useToast();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [date_birthday, setDate_birthday] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  async function toggleRegister(event: React.MouseEvent<HTMLInputElement>) {
    console.log(new Date(date_birthday).getTime().toString())
    event.preventDefault();
    if (EmailValidator.validate(email)) {
      if (name.length > 3) {
        if (password.length > 5) {
          if (password === password2) {
            const data = {
              email: email,
              password: password,
              name: name,
              date_birthday:new Date(date_birthday).getTime().toString(),
            };
            try {
              
              var response = await Api.post("/users", data, {headers:{"Content-Type": "application/json"}});
              if (response.status == 201) {
                toast({
                  title: "Sucesso",
                  description: "Cadastro realizado com sucesso!",
                  status: "success",
                  duration: 9000,
                  isClosable: true,
                });
              } else {
                toast({
                  title: "Erro",
                  description: response.data,
                  status: "error",
                  duration: 9000,
                  isClosable: true,
                });
              }
            } catch (error) {
              toast({
                title: "Erro",
                description: error.message,
                status: "error",
                duration: 9000,
                isClosable: true,
              });
            }
          } else {
            toast({
              title: "Erro",
              description: "As senhas não são iguais.",
              status: "error",
              duration: 9000,
              isClosable: true,
            });
          }
        } else {
          toast({
            title: "Erro",
            description: "Sua senha deve possuir no mínimo 8 dígitos.",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        }
      } else {
        toast({
          title: "Erro",
          description: "Para se cadastrar você deve inserir um nome válido.",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    } else {
      toast({
        title: "Erro",
        description: "Para se cadastrar você deve inserir um email válido.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
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
          Faça seu cadastro na nossa plataforma
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
        <InputLogin
          marginTop={2}
          placeholder="Nome"
          type="text"
          value={name}
          onChange={(event: React.FormEvent<HTMLInputElement>) =>
            setName(event.currentTarget.value)
          }
        />
        <InputLogin
          placeholder="E-mail"
          type="email"
          value={email}
          onChange={(event: React.FormEvent<HTMLInputElement>) =>
            setEmail(event.currentTarget.value)
          }
        />
        <InputLogin
          marginTop={2}
          placeholder="Senha"
          type="password"
          value={password}
          onChange={(event: React.FormEvent<HTMLInputElement>) =>
            setPassword(event.currentTarget.value)
          }
        />
        <InputLogin
          marginTop={2}
          placeholder="Digite a senha novamente"
          type="password"
          value={password2}
          onChange={(event: React.FormEvent<HTMLInputElement>) =>
            setPassword2(event.currentTarget.value)
          }
        />
        <InputLogin
          marginTop={2}
          placeholder="Data de Nascimento"
          type="date"
          value={date_birthday}
          onChange={(event: React.FormEvent<HTMLInputElement>) =>
            setDate_birthday(event.currentTarget.value)
          }
        />

        <Link
          alignSelf="flex-start"
          marginTop={2}
          fontSize="sm"
          color="blue.500"
          fontWeight="bold"
          _hover={{ color: "blue.600" }}
        >
          Esqueci minha senha
        </Link>

        <Button
          backgroundColor="blue.500"
          marginTop={6}
          height="50px"
          onClick={toggleRegister}
          borderRadius="sm"
          _hover={{ backgroundColor: "blue.600" }}
        >
          CADASTRAR-SE
        </Button>

        <Text textAlign="center" fontSize="sm" color="gray.300" marginTop={6}>
          Já possui uma conta?{" "}
          <Link
            href="/login"
            alignSelf="flex-start"
            marginTop={2}
            fontSize="sm"
            color="blue.500"
            fontWeight="bold"
            _hover={{ color: "blue.600" }}
          >
            Fazer login
          </Link>
        </Text>
      </Flex>
    </Grid>
  );
};
export default RegisterPage;
