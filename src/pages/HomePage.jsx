import { Grid } from "../components/Grid";

import { Stack } from "@chakra-ui/react";

export const Home = () => {
  return (
    <Stack minHeight="100vh" display="flex" padding={4}>
      <Grid />
    </Stack>
  );
};
