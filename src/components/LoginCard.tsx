import { FormControl, Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Card } from "./Card";
import { MyButton } from "./Button";
import { login } from "../services/login";
import { api } from "../api";

interface UserData{
  email: string,
  senha: string,
  nome: string
}

export const LoginCard = () =>{
        
      //api
      //<p>{userData?.nome}</p>
      const [userData,setUserData] = useState<null | UserData>()

      //button
      const [email, setEmail] = useState<string>('')
      const [senha, setSenha] = useState<string>('')
      const handleLogin = () => {
      if (!email || !senha) {
          alert('Preencha email e senha');
          return;
      }
      login(email,senha)

    }
    useEffect(() => {
        const getData = async () => {
            const data :any | UserData = await api
            setUserData(data)
        }
          getData()
      },[])
      console.log(userData)
    return(
        <Card paragraph={"Bem vindo ao Dio Bank"} details={" Preencha seus dados "}>
            {
                userData === null || userData === undefined ? <h1>Loading...</h1> : <h1>Informações Carregadas </h1>

            }
          <FormControl>
            Email
          </FormControl>
          <Input type="email" placeholder="" mb={4} onChange={(event) => setEmail(event.target.value)} />
          <FormControl>
            Senha
          </FormControl>
          <Input type="Senha" placeholder="" mb={6} onChange={(event) => setSenha(event.target.value)} />
          <MyButton onClick={handleLogin} label="Entrar" />
        </Card>
        
    )
}