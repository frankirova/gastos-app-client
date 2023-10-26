import { DeleteModal } from "./DeleteModal";
import { ModalEditMovement } from "./ModalEditMovement";
import { useEffect } from "react";
import { useMovements } from "../store/movementsStore";
import { useAccounts } from "../store/accountsStore";

import {
  Box,
  Button,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";

export const MovementsTable = () => {
  const { movements, getMovements } = useMovements();
  const { selectedAccount } = useAccounts();
  const bgColorGreen = useColorModeValue("green.100", "green.700");
  const bgColorRed = useColorModeValue("red.100", "red.700");

  useEffect(() => {
    getMovements(selectedAccount._id);
  }, [selectedAccount]);

  const getBgColor = (group) => {
    return group === "income" ? bgColorGreen : bgColorRed;
  };

  return (
    <Box>
      <Table variant="simple" minWidth='full' color={"white"}>
        <Thead bg="#3a5270">
          <Tr>
            <Th textColor="white">Fecha</Th>
            <Th textColor="white">Categoría</Th>
            <Th textColor="white">Grupo</Th>
            <Th textColor="white">Monto</Th>
            <Th textColor="white">Descripción</Th>
            <Th textColor="white"></Th>
            <Th textColor="white"></Th>
          </Tr>
        </Thead>
        <Tbody>
          {movements.map((movement) => (
            <Tr key={movement._id}>
              <Td>{movement.date}</Td>
              <Td>{movement.category}</Td>
              <Td>{movement.group}</Td>
              <Td color={"black"} bg={getBgColor(movement.group)}>${movement.amount}</Td>
              <Td>{movement.description}</Td>
              <Td>
                <ModalEditMovement id={movement._id} />
              </Td>
              <Td>
                <DeleteModal id={movement._id} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};
