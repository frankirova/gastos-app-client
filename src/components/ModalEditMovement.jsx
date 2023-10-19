import { useForm } from "../hooks/useForm";
import { useMovements } from "../store/movementsStore";
import { useRef, useState } from "react";

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
import { useAccounts } from "../store/accountsStore";

export const ModalEditMovement = ({ id }) => {
  const { editMovement } = useMovements();
  const [selectedGroup, setSelectedGroup] = useState("");
  const { formState, handleChange } = useForm();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = useRef(null);
  const initialRef = useRef(null);
  const { accounts } = useAccounts();

  const handleGroupChange = (e) => {
    const selectedGroup = e.target.value;
    setSelectedGroup(selectedGroup);
    handleChange(e);
  };

  const handleActionAndCloseModal = () => {
    editMovement(formState, id);
    onClose();
  };

  return (
    <>
      <Button onClick={onOpen}>Edit</Button>
      <Modal
        finalFocusRef={finalRef}
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit movement</ModalHeader>
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
                type="number"
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
              <Input
                name="category"
                onChange={handleChange}
                onClose={onClose}
                placeholder="Categoria"
                ref={initialRef}
              />
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
              onClick={handleActionAndCloseModal}
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
