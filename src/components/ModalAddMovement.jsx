import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useForm } from "../hooks/useForm";
//   import { useCategories } from "../store/categoryStore";
import { useMovements } from "../store/movementsStore";
import { useCategories } from "../store/categoryStore";
import { useAccounts } from "../store/accountsStore";

export const ModalAddMovement = () => {
  const [selectedGroup, setSelectedGroup] = useState("");
  const { categories, getCategories } = useCategories();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { addMovement } = useMovements();
  const { getMovements } = useMovements();
  const { getAccounts, accounts } = useAccounts();

  const categoriesExpense = categories.filter(
    (category) => category.group === "expense"
  );
  const categoriesIncome = categories.filter(
    (category) => category.group === "income"
  );

  useEffect(() => {
    getAccounts();
  }, []);

  useEffect(() => {
    getMovements();
  }, []);

  useEffect(() => {
    getCategories();
  }, []);

  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();
  const formattedDate = `${day}-${month}-${year}`;

  const { formState, handleChange } = useForm({
    amount: "",
    category: "",
    date: formattedDate,
    description: "",
    group: "",
  });

  console.log(formState);

  const handleGroupChange = (e) => {
    const selectedGroup = e.target.value;
    setSelectedGroup(selectedGroup);
    handleChange(e);
  };

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const handleActionAndCloseModal = (category) => {
    addMovement(category);
    onClose();
  };
  // if (!fieldsMovements[0]) return <p>Loading</p>;
  return (
    <>
      <Button onClick={onOpen} colorScheme="orange">
        Add Movement
      </Button>
      <Modal
        finalFocusRef={finalRef}
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add movement</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Grupo</FormLabel>
              <Select
                name="group"
                onChange={handleGroupChange}
                placeholder="Seleciona un grupo"
              >
                <option value="expense">Gasto</option>
                <option value="income">Ingreso</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Monto</FormLabel>
              <Input
                name="amount"
                onChange={handleChange}
                onClose={onClose}
                placeholder="Monto"
                ref={initialRef}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Cuenta</FormLabel>
              <Select
                onChange={handleChange}
                placeholder="Selecciona una categoria"
                name="account"
              >
                {accounts.map((account) => (
                  <option key={account._id} value={account._id}>
                    {account.name}
                  </option>
                ))}
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Categoria</FormLabel>
              <Select
                onChange={handleChange}
                placeholder="Selecciona una categoria"
                name="category"
              >
                {selectedGroup === "expense"
                  ? categoriesExpense.map((category) => (
                      <option key={category._id} value={category.category}>
                        {category.category}
                      </option>
                    ))
                  : categoriesIncome.map((category) => (
                      <option key={category._id} value={category.category}>
                        {category.category}
                      </option>
                    ))}
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Descripcion</FormLabel>
              <Input
                name="description"
                onChange={handleChange}
                onClose={onClose}
                placeholder="Descripcion"
                ref={initialRef}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="orange"
              mr={3}
              onClick={() => handleActionAndCloseModal(formState)}
            >
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
