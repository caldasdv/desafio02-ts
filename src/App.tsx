import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Layout } from "./components/Layout";
import Conta from "./pages/Conta";
import Home from "./pages/Home";
import ContaInfo from "./pages/ContaInfo";
import { AppContextProvider } from "./components/AppContext";

function App() {
  return (
    <BrowserRouter>
      <AppContextProvider>
        <ChakraProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/conta/:id" element={<Conta />} />
              <Route path="/conta/info" element={<ContaInfo />} />
            </Routes>
          </Layout>
        </ChakraProvider>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
