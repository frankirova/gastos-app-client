import React, { useState } from "react";
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
    Select,
    useDisclosure,
} from "@chakra-ui/react";
import { useForm } from "../hooks/useForm";
import { getCryptos } from "../helpers/getCryptos";

export const ModalAddAccount = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [cryptos, setCryptos] = useState([]);

    const { formState, handleChange } = useForm();

    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);

    const handleActionAndCloseModal = () => {
        const response = getCryptos();
        setCryptos(response);
        onClose();
    };
    return (
        <Flex justifyContent="center">
            <Button
                onClick={onOpen}
                backgroundColor={"#4d648d"}
                color={"#acc2ef"}
            >
                Add Account
            </Button>
            <Modal
                finalFocusRef={finalRef}
                initialFocusRef={initialRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add Account</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>Name</FormLabel>
                            <Input
                                name="account-name"
                                onChange={handleChange}
                                onClose={onClose}
                                placeholder="nombre de la cuenta"
                                ref={initialRef}
                            />
                        </FormControl>
                        <FormLabel>Currency</FormLabel>
                        <Select
                            name="currency"
                            onChange={handleChange}
                            placeholder="Seleciona una moneda"
                        >
                            {cryptos.map((account) => (
                                <option key={account.id} value={account.id}>
                                    <p>{account.id}</p>
                                    <Image w={"24px"} src={account.image} />
                                </option>
                            ))}
                        </Select>
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
