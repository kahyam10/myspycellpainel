import React from "react";

import { Flex, Heading, Button, CircularProgress, Text } from "@chakra-ui/core";

import {
  MdStayPrimaryPortrait as MdSmartPhone,
  MdAccessTime,
  MdDateRange,
  MdPerson,
  MdShoppingCart,
  MdEmail,
} from "react-icons/md";
import InfoItem from "../../item/infoItem";
import { getSmallDate } from "../../../utils/dateFunctions";

type Props = {
  user: IUser | null;
  account: IAccount | null;
  plan: IPlan | null;
};

const AccountInfo: React.FC<Props> = ({ user, account, plan }) => {
  return (
    <Flex
      gridArea="logo"
      flexDir="column"
      backgroundColor="gray.600"
      width="100%"
      borderRadius={4}
      padding={4}
    >
      <Heading color="blue.500" fontWeight="bold" fontSize="26px">
        Informações da conta
      </Heading>
      {user != null && account != null ? (
        <>
          <InfoItem
            item_name="Nome"
            item_icon={MdPerson}
            item_value={user?.name}
            item_space={4}
          />
          <InfoItem
            item_name="E-mail"
            item_icon={MdEmail}
            item_value={user?.email}
            item_space={2}
          />
          <InfoItem
            item_name="Plano"
            item_icon={MdShoppingCart}
            item_value={plan?.name}
            item_space={2}
          />
          {plan?.duration ? (
            <InfoItem
              item_name="Data de expiração"
              item_icon={MdDateRange}
              item_value={getSmallDate(
                Number.parseInt(account.activation_date) +
                  plan.duration * 86400000
              )}
              item_space={2}
            />
          ) : (
            <></>
          )}
          <InfoItem
            item_name="Dispositivos cadastrados"
            item_icon={MdSmartPhone}
            item_value={account?.devices + "/" + plan?.device_count}
            item_space={2}
          />
        </>
      ) : (
        <Flex
          width="100%"
          justifyContent="center"
          flexDir="column"
          alignItems="center"
        >
          <CircularProgress
            isIndeterminate
            color="blue"
            trackColor="red"
            thickness={0.3}
            size="2rem"
            capIsRound
          />
          <Text marginTop={2}>Carregando dados da conta.</Text>
        </Flex>
      )}
      <Button
        backgroundColor="blue.600"
        width="100%"
        borderRadius={4}
        marginTop={6}
        _hover={{
          backgroundColor: "blue.700",
        }}
      >
        Gerenciar conta
      </Button>
    </Flex>
  );
};

export default AccountInfo;
