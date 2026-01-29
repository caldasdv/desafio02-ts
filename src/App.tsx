import { Center, ChakraProvider } from '@chakra-ui/react'
import { Header } from "./components/Header/Header";
import { LoginCard } from './components/LoginCard';


function App() {
  
  return (
    <ChakraProvider>
      <Header></Header>
      <Center bgColor="gray" minHeight="100vh" flex={1}  minH="calc(100vh - 77px)">
        <LoginCard/>
      </Center>
    </ChakraProvider>
  );
}

export default App;
