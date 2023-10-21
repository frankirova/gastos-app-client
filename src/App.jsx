import { Grid } from "./components/Grid";
import { ButtonAdd } from "./components/ButtonAdd";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/HomePage";
import { CategoriesPage, ReportsPage, TransactionsPage } from "./pages";
import { Aside } from "./components/Aside";
import { Flex } from "@chakra-ui/react";
import { AccountPage } from "./pages/AccountPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Flex>
          {/* <Aside /> */}
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/transactions" element={<TransactionsPage />}></Route>
            <Route path="/categories" element={<CategoriesPage />}></Route>
            <Route path="/reports" element={<ReportsPage />}></Route>
            <Route path="/accounts" element={<AccountPage />}></Route>
          </Routes>
          <ButtonAdd />
        </Flex>
      </BrowserRouter>
    </>
  );
}

export default App;
