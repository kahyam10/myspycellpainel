import { Flex, Grid, Text } from "@chakra-ui/core";
import React from "react";
import TabTitle from "../../text/tabTitle";
import PlanItem from "./PlanItem";
type Props = {
  account: AccountState;

  login: LoginState;
  plan: PlanState;
};
const PlanList: React.FC<Props> = ({ account, login, plan }) => {
 

  return (
    <Flex flexDir="column" width="100%" padding={6}>
      <TabTitle>Planos</TabTitle>
      <Flex backgroundColor="blue.800" borderRadius={12} padding={2} display={plan.state?.id == 6 ? "none": "flex"}>
        <Text >
          Você já possui o plano {plan.state?.name} que vai durar até o dia XXX, mas você pode adiquirir um plano agora e os dias serão acrescentados ao plano atual.
        </Text>
      </Flex>
      <Grid
        borderRadius={8}
        gridTemplateColumns="1fr 1fr 1fr"
        columnGap={2}
        width="100%"
        marginTop={4}
      >
        <PlanItem name="Mensal" value={119.90} duration={1} devices={2} />
        <PlanItem name="Trimestral" value={269.90} duration={3} devices={3} bestSeller/>
        <PlanItem name="Semestral" value={599.90} duration={6} devices={5} />
      </Grid>
    </Flex>
  );
};

export default PlanList;
