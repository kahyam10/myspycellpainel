import { Badge, Box, Button, Flex, Heading, Text } from "@chakra-ui/core";
import React from "react";
import { MdCardMembership } from "react-icons/md";

type Props = {
  bestSeller?: boolean;
  name: string;
  value: number;
  duration: number;
  devices: number;
};

const PlanItem: React.FC<Props> = ({
  bestSeller,
  name,
  value,
  duration,
  devices,
}) => {
  return (
    <Flex
      backgroundColor={bestSeller ? "gray.100" : "gray.600"}
      flexDir="column"
      borderRadius={12}
      alignItems="center"
      justifyContent="flex-end"
    >
      <Text
        textAlign="center"
        fontSize={18}
        margin={1}
        fontWeight="bold"
        color="blue.600"
        display={bestSeller ? "flex" : "none"}
      >
        Mais Vendido
      </Text>
      <Flex
        width="100%"
        backgroundColor="blue.800"
        height="450px"
        borderRadius={12}
        padding={4}
        alignItems="center"
        justifyContent="center"
        flexDir="column"
        border="solid 2px"
        borderColor="gray.100"
        boxShadow="box-shadow: 0px 13px 16px -4px rgba(217,217,217,1)"
      >
        <Heading color="gray.100" fontSize={52}>
          {name}
        </Heading>
        <Heading fontSize={42} color="blue.500" fontWeight="bold">
          R${value.toString().replace(".", ",")}0
        </Heading>
        <Badge
          backgroundColor="gray.100"
          color="blue.800"
          padding={2}
          textDecoration="underline"
        >
          apenas R${(value / duration).toFixed(2).toString().replace(".", ",")} por mês
        </Badge>
        <Text marginTop={4} textAlign="center">
          Com o plano {name} você terá acesso ilimitado a todos os recuros do
          MySpyCell por {duration} {duration > 1 ? "meses" : "mês"} e poderá
          monitorar até {devices} dispositivos.
        </Text>
        <Button
          backgroundColor="blue.600"
          width="100%"
          marginTop={4}
          padding={4}
        >
          Comprar Agora
        </Button>
      </Flex>
    </Flex>
  );
};

export default PlanItem;
