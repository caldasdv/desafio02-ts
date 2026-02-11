import { FormControl, Input } from "@chakra-ui/react";
import {useContext, useState} from "react";
import { Card } from "./Card";
import { MyButton } from "./Button";
import { Login } from "../services/Login";
import {AppContext} from "./AppContext";
import {useNavigate} from "react-router-dom";

export const  LoginCard = () => {
  //button
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const { setIsLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();

  const handleLogin = async () => {
      const loggedIn = await Login(email,senha)
    if (!loggedIn) {
      alert("Email ou senha incorretos");
      return;
    }
    setIsLoggedIn(true);
    navigate("/conta/1");
  };


  return (
    <Card paragraph={"Bem vindo ao Dio Bank"} details={" Preencha seus dados "}>
      {/* {
                userData === null || userData === undefined ? <h1>Loading...</h1> : <h1>Informações Carregadas </h1>

            } */}
      <FormControl>Email</FormControl>
      <Input
        type="email"
        placeholder=""
        mb={4}
        onChange={(event) => setEmail(event.target.value)}
      />
      <FormControl>Senha</FormControl>
      <Input
        type="Senha"
        placeholder=""
        mb={6}
        onChange={(event) => setSenha(event.target.value)}
      />
      <MyButton onClick={handleLogin} label="Entrar" />
    </Card>
  );
};
