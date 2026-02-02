import {Center, SimpleGrid, Spinner} from "@chakra-ui/react";
import CardInfo from "../components/CardInfo";
import {useEffect, useState} from "react";
import {api} from "../api";

interface UserData{
    email: string,
    senha: string,
    nome: string,
    balance: number
}

export const Conta = () =>{

    const [userData,setUserData] = useState<null | UserData>()
    useEffect(() => {
        const getData = async () => {
            const data :any | UserData = await api
            setUserData(data)
        }
        getData()
    },[])
    console.log(userData)
    const actualData = new Date()
    return(
        <Center bgColor="gray"
                minHeight="100vh"
                minH="calc(100vh - 77px)"
                >
            <SimpleGrid columns={2} spacing={2}>
                {
                    userData === undefined || userData === null ?
                        (
                            <Center>
                                <Spinner size = 'xl'/>
                            </Center>
                        ) :
                        (
                            <>
                                <CardInfo mainContent={` Bem vindo(a) ${userData?.nome}`} content={`${actualData.getDay()}/${actualData.getMonth()}/${actualData.getFullYear()} ${actualData.getHours()}:${actualData.getMinutes()} ` }/>
                                <CardInfo mainContent={'Saldo'} content={`R$ ${userData.balance}`}/>
                            </>
                        )
                }

            </SimpleGrid>
        </Center>

    )
}
export default Conta