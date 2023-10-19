import { useEffect } from "react";
import { useAccounts } from "../store/accountsStore";
import { Box, Button, Heading, Stack, Text } from "@chakra-ui/react";
import { ModalEditAccount } from "../components/ModalEditAccount";

export const AccountPage = () => {
  const { getAccounts, accounts } = useAccounts();

  useEffect(() => {
    getAccounts();
  }, []);
  return (
    <>
      <Box
        display="grid"
        gap={4}
        gridTemplateRows="1fr 1fr 1fr"
        gridTemplateColumns="1fr 1fr"
        padding={4}
      >
        {accounts.map((account) => (
          <Stack
            backgroundColor={"orange"}
            borderRadius={"10px"}
            boxShadow="lg"
            color="#3a5270"
            minHeight={"10rem"}
            minWidth="30vw"
            p={4}
          >
            <Heading size="md">{account.name}</Heading>
            <Text py="2" fontSize={"xx-large"}>
              Saldo: ${account.balance}
            </Text>
            <ModalEditAccount id={account._id}/>
          </Stack>
        ))}
      </Box>
    </>
  );
};
