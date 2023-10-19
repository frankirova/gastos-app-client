import { MovementsTable } from "../components/MovementsTable";

import { Flex, Heading } from "@chakra-ui/react";

export const TransactionsPage = () => {
  return (
    <Flex direction="column">
      <Heading>Transactions</Heading>
      <MovementsTable />
    </Flex>
  );
};
