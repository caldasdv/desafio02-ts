import { api } from "../api";

export const Login = async (email: string, senha: string): Promise<boolean> => {
    const data: any = await api;
  if (email !== data.email && senha !== data.email) {
    return false;
  }
  return senha === data.senha && email === data.email;
};
