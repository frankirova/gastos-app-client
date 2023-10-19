import { HeaderApp } from "./HeaderApp";
import { MovementsTable } from "./MovementsTable";

import { Box } from "@chakra-ui/react";

export const Grid = () => {
  return (
    <Box
      display="grid"
      gap={4}
      gridTemplateRows="1fr 1fr" // Dos filas de igual tamaño
    >
      <Box px={4} bg="white">
        <HeaderApp />
      </Box>
      <Box px={4} bg="white">
        <MovementsTable />
      </Box>
    </Box>
  );
};
