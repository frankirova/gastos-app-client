import { LastExpenses } from "./LastExpenses";
import { useEffect } from "react";
import { useMovements } from "../store/movementsStore";

import { Flex, Heading, Stack, Text } from "@chakra-ui/react";

export const HeaderApp = () => {
  const { getTotals, totals } = useMovements();

  useEffect(() => {
    getTotals();
  }, []);

  return (
    <Flex direction={"column"} gap={4}>
      <Stack
        backgroundColor="#3a5270"
        borderRadius={"10px"}
        boxShadow="lg"
        color="orange"
        minHeight={"10rem"}
        minWidth="60vw"
        p={4}
      >
        <Heading size="md">Saldo Actual</Heading>
        <Text py="2" fontSize={"xx-large"}>
          ${totals.saldo}
        </Text>
      </Stack>

      <Flex minWidth="60vw" justifyContent={"space-between"} gap={4}>
        <Stack
          backgroundColor={"orange"}
          borderRadius={"10px"}
          boxShadow="lg"
          color="#3a5270"
          minHeight={"10rem"}
          minWidth="30vw"
          p={4}
        >
          <Heading size="md">Ingresos</Heading>
          <Text py="2" fontSize={"xx-large"}>
            ${totals.totalIncome}
          </Text>
        </Stack>

        <Stack
          backgroundColor="orange"
          borderRadius={"10px"}
          boxShadow="lg"
          color="#3a5270"
          minHeight={"10rem"}
          minWidth="30vw"
          p={4}
        >
          <Heading size="md">Gastos</Heading>
          <Text py="2" fontSize={"xx-large"}>
            ${totals.totalExpense}
          </Text>
        </Stack>
      </Flex>
      <LastExpenses />
    </Flex>
  );
};
