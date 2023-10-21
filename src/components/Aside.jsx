import { Link } from "react-router-dom";

import { Button, Flex, Heading } from "@chakra-ui/react";

export const Aside = () => {
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
        <Heading color="#acc2ef">
          <Link to="/">Franki</Link>
        </Heading>
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
