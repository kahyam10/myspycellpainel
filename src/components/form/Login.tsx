import { Flex, InputGroup, InputLeftElement, Icon, Link, Button, useToast, Text } from '@chakra-ui/core';
import { useRouter } from 'next/router';
import publicIp from 'public-ip';
import React, { useState } from 'react';
import {sha256} from "js-sha256";
import { useDispatch } from 'react-redux';
import Api from '../../services/Api';
import InputLogin from '../input/InputLogin';
import { SetLogin } from '../../store/actions/loginActions';

const LoginForm: React.FC = () => {
    const router = useRouter();

    const dispatch = useDispatch();
    const [request, setRequest] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const toast = useToast();
  
    
  async function handleLogin(event: React.MouseEvent<HTMLInputElement>) {
    event.preventDefault();
    if (!request) {
      setRequest(true);
      try {
        const ip = await publicIp.v4();
        const header = {
          headers: {
            "Content-Type": "application/json",
            email: email,
            password: sha256(password),
            ip: ip,
          },
        };
        //esta aqui
        var response =await Api.post("/users/login", {}, header)
        console.log('====================================');
        console.log(response);
        console.log('====================================');  
        if (response.status === 202){
            toast({
              title: "Login realizado com sucesso",
              description: "",
              status: "success",
              duration: 5000,
              isClosable: true,
            })
            var login:ILogin={
              ip:ip,
              token:response.data.token,
              user:response.data.user
            }
            dispatch(SetLogin(login));
            setRequest(false);
            router.push("/dashboard/resumo")
          }else{
            var {error}= response.data;
            console.log(error);
            toast({
              title: "Erro ao fazer login",
              description: "error",
              status: "error",
              duration: 6000,
              isClosable: true,
            });
          }
        setRequest(false);
      } catch (error) {
        setRequest(false);
        toast({
          title: "Erro ao fazer login",
          description: "Erro ao fazer Login, tente novamente. " + error,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    }
  }


    return (
      
    <Flex
    
    height="100%"
    width="100%"
    maxWidth="48rem"
    backgroundColor="gray.600"
    borderRadius="md"
    flexDir="column"
    justifyContent="center"
    alignItems="stretch"
    paddingX={16}
      paddingY={8}
  >
    <Flex width="100%" marginBottom={8} justifyContent="center">
    <Text textAlign="center" fontWeight="bold" fontSize={40} color="blue.600">
      Bem Vindo!
    </Text>
    </Flex>
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
    <InputGroup height="50px" marginTop={2}>
      <InputLeftElement
        height="50px"
        children={<Icon name="lock" color="gray.400" />}
      />
      <InputLogin
        paddingLeft={10}
        placeholder="Senha"
        type="password"
        value={password}
        onChange={(event: React.FormEvent<HTMLInputElement>) =>
          setPassword(event.currentTarget.value)
        }
        _active={{
          background: "gray.200",
        }}
      />
    </InputGroup>

    <Link
      href="/login/recover"
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
      onClick={handleLogin}
      borderRadius="sm"
      _hover={{ backgroundColor: "blue.600" }}
    >
      ENTRAR
    </Button>

    <Text textAlign="center" fontSize="sm" color="gray.300" marginTop={6}>
      Não tem uma conta?{"  "}
      <Link
        href="/register"
        alignSelf="flex-start"
        marginTop={2}
        fontSize="sm"
        color="blue.500"
        fontWeight="bold"
        _hover={{ color: "blue.600" }}
      >
        Cadastrar-se
      </Link>
    </Text>
  </Flex>

  );
}

export default LoginForm;