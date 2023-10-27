import { LastExpenses } from "./LastExpenses";
import { useEffect } from "react";
import { useMovements } from "../store/movementsStore";

import { Flex, Heading, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import { ChartUpIcon } from "../icons/ChartUpIcon";
import { ChartDownIcon } from "../icons/ChartDownIcon";
import { useAccounts } from "../store/accountsStore";

export const HeaderApp = () => {
  const { getTotals, totals } = useMovements();
  const { selectedAccount } = useAccounts();
  console.log(selectedAccount)
  useEffect(() => {
    getTotals(selectedAccount._id);
  }, [selectedAccount]);
console.log(totals)
  return (
    <Flex direction={"column"} gap={4}>
      <Stack
        backgroundColor={"#4d648d"}
        borderRadius={"10px"}
        boxShadow="lg"
        color={"#acc2ef"}
        minHeight={"10rem"}
        maxWidth="30vw"
        p={4}
      >
        <Heading size="md">Saldo Actual</Heading>
        <Text py="2" fontSize={"xx-large"}>
          ${totals.saldo}
        </Text>
      </Stack>

      <Flex minWidth="30vw" justifyContent={"space-between"} gap={4}>
        <HStack
          backgroundColor={"#4d648d"}
          color="#acc2ef"
          alignItems={"flex-start"}
          justifyContent={"space-between"}
          borderRadius={"10px"}
          boxShadow="lg"
          minHeight={"10rem"}
          minWidth="30vw"
          p={4}
        >
          <HStack>
            <VStack>
              <Heading size="md">Ingresos</Heading>
              <Text py="2" fontSize={"xx-large"}>
                ${totals.totalIncome}
              </Text>
            </VStack>
            <ChartUpIcon />
          </HStack>
          <HStack>
            <VStack>
              <Heading size="md">Gastos</Heading>
              <Text py="2" fontSize={"xx-large"}>
                ${totals.totalExpense}
              </Text>
            </VStack>
            <ChartDownIcon />
          </HStack>
        </HStack>
      </Flex>
      <LastExpenses />
    </Flex>
  );
};
