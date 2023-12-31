import { Box, Grid, GridItem } from "@chakra-ui/react";
import { HeaderApp } from "./HeaderApp";
import { Aside } from "./Aside";
import { MovementsTable } from "./MovementsTable";

export const Layout = () => {
  return (
    <Grid
      minH={"full"}
      templateRows="repeat(2, 1fr)"
      templateColumns="auto 1fr"
      background={'#1f2b3e'}
      padding={'2rem'}
      // gap='1.5rem'
    >
      <GridItem maxWidth={"20vw"} rowSpan={2} colSpan={1}>
        <Box>
          <Aside />
        </Box>
      </GridItem>
      <GridItem w={'80vw'} rowSpan={1} colSpan={1}>
        <Box>
          <HeaderApp />
        </Box>
      </GridItem>
      <GridItem w={'80vw'} rowSpan={1} colSpan={1}>
        <Box>
          <MovementsTable />
        </Box>
      </GridItem>
    </Grid>
  );
};
