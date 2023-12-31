import { useEffect } from "react";
import { useAccounts } from "../store/accountsStore";
import {
    Box,
    Button,
    Grid,
    GridItem,
    Heading,
    Stack,
    Text,
} from "@chakra-ui/react";
import { ModalEditAccount } from "../components/ModalEditAccount";
import { ModalAddAccount } from "../components/ModalAddAccount";
import { Aside } from "../components/Aside";

export const AccountPage = () => {
    const { getAccounts, accounts } = useAccounts();

    useEffect(() => {
        getAccounts();
    }, []);
    return (
        <Grid
            minWidth={"full"}
            minHeight={"100vh"}
            padding={4}
            backgroundColor={"#1f2b3e"}
            // gridTemplateRows="1fr 1fr 1fr"
            gridTemplateColumns="1fr 1fr"
        >
            <GridItem maxWidth={"20vw"} rowSpan={2} colSpan={1}>
                <Aside />
            </GridItem>
            <GridItem w={"80vw"} rowSpan={1} colSpan={1}>
                <Box
                    display="grid"
                    gap={4}
                    // gridTemplateRows="1fr 1fr 1fr"
                    gridTemplateColumns="1fr 1fr"
                >
                    {accounts.map((account) => (
                        <Stack
                            background={"#4d648d"}
                            borderRadius={"10px"}
                            boxShadow="lg"
                            color={"#acc2ef"}
                            minHeight={"10rem"}
                            minWidth="30vw"
                            p={4}
                        >
                            <Heading size="md">{account.name}</Heading>
                            <Text py="2" fontSize={"xx-large"}>
                                Saldo: ${account.balance}
                            </Text>
                            <ModalEditAccount id={account._id} />
                        </Stack>
                    ))}
                </Box>
            </GridItem>
            <ModalAddAccount />
        </Grid>
    );
};
