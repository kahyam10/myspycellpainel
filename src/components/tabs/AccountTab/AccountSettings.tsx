import { Flex, Grid } from "@chakra-ui/core";
import React, { useState } from "react";
import { MdPerson, MdEmail, MdShoppingCart, MdDateRange } from "react-icons/md";
import { getSmallDate } from "../../../utils/dateFunctions";
import InfoItem from "../../item/infoItem";
import TabTitle from "../../text/tabTitle";
import ChangeAccountPassword from "./ChangeAccountPassword";
type Props = {
  account: AccountState;
  devices: DeviceState;
  login: LoginState;
  plan: PlanState;
  user: UserState;
};
const AccountSettings: React.FC<Props> = ({
  account,
  devices,
  login,
  plan,
  user,
}) => {

  const [Password, setPassword] = useState<boolean>(false)

  return (
    <Flex flexDir="column" width="100%" padding={6}>
      <TabTitle>Detalhes da Conta</TabTitle>
      {account.state && login.state && plan.state && user.state ? (
        <Flex
          flexDir="column"
          padding={4}
          borderRadius={8}
          backgroundColor="gray.800"
        >
          <InfoItem
            item_name="Nome"
            item_icon={MdPerson}
            item_value={user.state.name}
            item_space={2}
          />
          <InfoItem
            item_name="E-mail"
            item_icon={MdEmail}
            item_value={user.state.email}
            item_space={2}
          />
          <InfoItem
            item_name="Plano"
            item_icon={MdShoppingCart}
            item_value={plan.state.name}
            item_space={2}
          />

          <InfoItem
            item_name="Data de expiração"
            item_icon={MdDateRange}
            item_value={getSmallDate(
              Number.parseInt(
                account.state.activation_date + plan.state.duration * 86400000
              )
            )}
            item_space={2}
          />
          <ChangeAccountPassword button={Password} setButton={setPassword}/>
        </Flex>
      ) : (
        "Erro ao carregar informações"
      )}
    </Flex>
  );
};

export default AccountSettings;
