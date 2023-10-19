import { ModalAddCategory } from "../components/ModalAddCategory";
import { SimpleTable } from "../components/Table";
import { useCategories } from "../store/categoryStore";
import { useEffect } from "react";

import { Container, Flex, Heading, Spinner } from "@chakra-ui/react";

export const CategoriesPage = () => {
  const { deleteCategory } = useCategories();
  const { getCategories, categories } = useCategories();

  useEffect(() => {
    getCategories();
  }, []);

  if (!Array.isArray(categories)) {
    return (
      <Flex justify="center" align="center" minHeight="85vh">
        <Spinner color="primary" size="xl" />
      </Flex>
    );
  }

  return (
    <Container>
      <Flex direction="column" gap={8} padding={4} alignItems="center" width="full">
        <Heading>CategoriesPage</Heading>
        <SimpleTable categories={categories} />
        <ModalAddCategory />
      </Flex>
    </Container>
  );
};
