import {
  Center,
  ChakraProvider,
  Input,
  Box,
  Button, FormControl
} from '@chakra-ui/react'
import { login } from './services/login';
import {Header} from "./components/Header/Header";
import {MyButton} from "./components/Button";
import {Card} from "./components/Card";
import { useState } from 'react';


function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const handleLogin = () => {
    if (!email || !senha) {
      alert('Preencha email e senha');
      return;
    }
    login(email,senha);
  }

  return (
    <ChakraProvider>
      <Header></Header>
      <Center bgColor="gray" minHeight="100vh" flex={1}  minH="calc(100vh - 77px)">
        <Card paragraph={"Bem vindo ao Dio Bank"} details={" Preencha seus dados "}>
          <FormControl>
            Email
          </FormControl>
          <Input type="email" placeholder="" mb={4} onChange={(e) => setEmail(e.target.value)} />
          <FormControl>
            Senha
          </FormControl>
          <Input type="Senha" placeholder="" mb={6} onChange={(e) => setSenha(e.target.value)} />
          <MyButton onClick={handleLogin} label="Entrar" />
        </Card>
      </Center>
    </ChakraProvider>
  );
}

export default App;
