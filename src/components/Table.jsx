import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import { ModalEditCategory } from "./ModalEditCategory";
import { DeleteModal } from "./DeleteModal";

export const SimpleTable = ({ categories }) => {
  const bgColorGreen = useColorModeValue("green.100", "green.700");
  const bgColorRed = useColorModeValue("red.100", "red.700");
  const fieldsCategory = categories.map((cat) => Object.keys(cat));

  if (!categories[0]) return <h1>Loading...</h1>;

  const getBgColor = (group) => {
    return group === "income" ? bgColorGreen : bgColorRed;
  };

  return (
    <Table variant="simple">
      <Thead>
        <Tr bg="#3a5270">
          {fieldsCategory[0].map((field) => (
            <Th color="white">{field}</Th>
          ))}
          <Th color="white">Edit</Th>
          <Th color="white">Delete</Th>
        </Tr>
      </Thead>
      <Tbody>
        {categories.map((category) => (
          <Tr bg={getBgColor(category.group)}>
            <Td>{category._id}</Td>
            <Td>{category.category}</Td>
            <Td>{category.group}</Td>
            <Td>
              <ModalEditCategory />
            </Td>
            <Td>
              <DeleteModal />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};
