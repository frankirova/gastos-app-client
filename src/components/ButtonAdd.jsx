import { ModalAddMovement } from "./ModalAddMovement";

import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import "../styles/__ButtonWhatsapp.css";

export const ButtonAdd = () => {
  return (
    <Menu>
      <MenuButton
        _active={{ bg: "orange" }}
        _focus={{ outline: "none" }}
        _hover={{ bg: "orange" }}
        as={Button}
        bg="orange"
        borderRadius="full"
        bottom="4rem"
        color="white"
        h="60px"
        pos="fixed"
        right="4rem"
        w="60px"
      >
        <p color="white">
          <i className="fa-solid fa-plus"></i>
        </p>
      </MenuButton>
      <MenuList bg="white" color="black">
        <ModalAddMovement />
        <MenuItem>Transactions</MenuItem>
      </MenuList>
    </Menu>
  );
};
