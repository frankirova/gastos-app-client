import { useEffect } from "react";
import { useMovements } from "../store/movementsStore";

import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  HStack,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";

export const LastExpenses = () => {
  const { movements, getMovements } = useMovements();
  const compareByDate = (a, b) => b.date - a.date;

  useEffect(() => {
    getMovements();
  }, []);

  return (
    <VStack spacing={4} maxWidth={"30vw"} backgroundColor={"#4d648d"} padding={4} alignItems={'start'} mb={4} borderRadius={'10px'}>
      <Heading size={'md'}>Last Expenses</Heading>
      {movements
        .sort(compareByDate)
        .slice(0, 2)
        .map((movement) => (
          <HStack color={"white"}>
            <Box key={movement._id}>{movement.category}</Box>
            <Box> {movement.date}</Box>
            <Box>${movement.amount}</Box>
          </HStack>
          // <Card key={movement._id} bg={'#4d648d'} color={'white'}>
          //   <CardHeader>
          //     <Heading size="md"> {movement.category}</Heading>
          //   </CardHeader>
          //   <CardBody>
          //     <Text>${movement.amount}</Text>
          //     <Text>date:{movement.date}</Text>
          //   </CardBody>
          //   <CardFooter>
          //     <Button>View here</Button>
          //   </CardFooter>
          // </Card>
        ))}
    </VStack>
  );
};
