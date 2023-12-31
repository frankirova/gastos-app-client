import { useAccounts } from "../store/accountsStore";
import { useForm } from "../hooks/useForm";
import React from "react";

import {
    Button,
    Flex,
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
    useDisclosure,
} from "@chakra-ui/react";

export const ModalEditAccount = ({ id }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { editAccount } = useAccounts();

    const { formState, handleChange } = useForm();
    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);

    const handleActionAndCloseModal = (account) => {
        editAccount(account, id);
        onClose();
    };
    return (
        <Flex justifyContent="center">
            <Button
                onClick={onOpen}
                backgroundColor={"#4d648d"}
                color={"#acc2ef"}
            >
                Edit
            </Button>
            <Modal
                finalFocusRef={finalRef}
                initialFocusRef={initialRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Edit Account</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>Name</FormLabel>
                            <Input
                                name="name"
                                onChange={handleChange}
                                onClose={onClose}
                                placeholder="name"
                                ref={initialRef}
                            />
                        </FormControl>
                        <FormLabel>Balance</FormLabel>
                        <Input
                            name="balance"
                            onChange={handleChange}
                            placeholder="Seleciona un grupo"
                        />
                         <FormLabel>Tarjetas</FormLabel>
                        <Input
                            name="cards"
                            onChange={handleChange}
                            placeholder="Selecciona una tarjeta"
                        />
                    </ModalBody>

                    <ModalFooter>
                        <Button onClick={onClose}>Cancel</Button>
                        <Button
                            colorScheme="orange"
                            mr={3}
                            onClick={() => handleActionAndCloseModal(formState)}
                        >
                            Save
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Flex>
    );
};
