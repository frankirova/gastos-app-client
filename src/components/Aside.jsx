import { Link } from "react-router-dom";
import { useAccounts } from "../store/accountsStore";
import { useEffect } from "react";

import {
  Button,
  Flex,
  Heading,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Tag,
} from "@chakra-ui/react";

export const Aside = () => {
  const { getAccounts, accounts, selectedAccount, updateSelectedAccount } = useAccounts();

  useEffect(() => {
    getAccounts();
  }, []);

  return (
    <aside>
      <Flex
        align="center"
        bg="#1f2b3e"
        direction="column"
        left="0"
        minHeight="100vh"
        position="sticky"
        top="0"
        // width="18rem"
        minWidth={'20vw'}
      >
              <Flex direction={"column"} gap={4}>
          <Heading color="#acc2ef">
            <Link to="/">Franki</Link>
          </Heading>
          <Image borderRadius={"100%"} src="https://placehold.co/48x48" />
          <Menu>
            <MenuButton>
              <Tag variant={"solid"}>{selectedAccount.name}</Tag>
            </MenuButton>
            <MenuList>
              {accounts.map((account) => (
                <MenuItem onClick={() => updateSelectedAccount(account)}>
                  {account.name}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Flex>
        <Flex
          color="white"
          p={4}
          direction="column"
          alignItems="flex-start"
          textAlign="left"
          gap={4}
          width="full"
        >
          <Button
            as={Link}
            bg="primary"
            color={"white"}
            fontSize="1.3rem"
            p={4}
            to="/transactions"
            width="full"
          >
            Transacciones
          </Button>
          <Button
            as={Link}
            bg="primary"
            color={"white"}
            fontSize="1.3rem"
            p={4}
            to="/categories"
            width="full"
          >
            Categorias
          </Button>
          <Button
            as={Link}
            bg="primary"
            color={"white"}
            fontSize="1.3rem"
            p={4}
            to="/reports"
            width="full"
          >
            Informes
          </Button>
          <Button
            as={Link}
            bg="primary"
            color={"white"}
            fontSize="1.3rem"
            p={4}
            to="/accounts"
            width="full"
          >
            Mis Cuentas
          </Button>
        </Flex>
      </Flex>
    </aside>
  );
};
