import { api } from "../api"

export const login = async (email : string, senha : string): Promise<void> => {
    const data : any = await api
    if (email !== data.email){
        return alert('Email invalido')
    }
    if(email === data.email){
        alert('Bem vindo ao Dio Bank!')
    }
}
