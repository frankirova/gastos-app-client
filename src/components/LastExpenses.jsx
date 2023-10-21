import { useEffect } from "react";
import { useMovements } from "../store/movementsStore";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

export const LastExpenses = () => {
  const { movements, getMovements } = useMovements();
  const compareByDate = (a, b) => b.date - a.date;

  useEffect(() => {
    getMovements();
  }, []);

  return (
    <SimpleGrid
      spacing={4}
      templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
    >
      {movements
        .sort(compareByDate)
        .slice(0, 3)
        .map((movement) => (
          <Card key={movement._id} bg={'#4d648d'} color={'white'}>
            <CardHeader>
              <Heading size="md"> {movement.category}</Heading>
            </CardHeader>
            <CardBody>
              <Text>${movement.amount}</Text>
              <Text>date:{movement.date}</Text>
            </CardBody>
            <CardFooter>
              <Button>View here</Button>
            </CardFooter>
          </Card>
        ))}
    </SimpleGrid>
  );
};
