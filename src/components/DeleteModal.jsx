import { useRef } from "react";
import { useMovements } from "../store/movementsStore";

import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

export const DeleteModal = ({ id }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = useRef(null);
  const initialRef = useRef(null);
  const { deleteMovement } = useMovements();

  const handleActionAndCloseModal = () => {
    deleteMovement(id);
    onClose();
  };

  return (
    <>
      <Button onClick={onOpen}>Delete</Button>
      <Modal
        finalFocusRef={finalRef}
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Delete</ModalHeader>
          <ModalCloseButton />

          <ModalBody pb={6}>
            <Text>Are you sure?</Text>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="orange"
              mr={3}
              onClick={() => handleActionAndCloseModal()}
            >
              Yes
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
