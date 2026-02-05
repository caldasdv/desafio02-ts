import { api } from "../api";
import { useContext } from "react";
import { AppContext } from "../components/AppContext";

export const Login = async (email: string, senha: string): Promise<void> => {
  const { isLoggedIn } = useContext(AppContext);
  console.log(isLoggedIn);
  const data: any = await api;
  if (email !== data.email) {
    return alert("Email invalido");
  }
  if (email === data.email) {
    alert("Bem vindo ao Dio Bank!");
  }
};
