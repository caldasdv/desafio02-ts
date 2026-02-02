import { Center } from "@chakra-ui/react";
import { LoginCard } from "../components/LoginCard";
import {useEffect, useState} from "react";
import {api} from "../api";


interface UserData{
    email: string,
    senha: string,
    nome: string
}

const Home = () =>{

    const [userData,setUserData] = useState<null | UserData>()
    useEffect(() => {
        const getData = async () => {
            const data :any | UserData = await api
            setUserData(data)
        }
        getData()
    },[])
    return (
    <Center
      bgColor="gray"
      minHeight="100vh"
      minH="calc(100vh - 77px)"
    >
      <LoginCard/>
    </Center>
    );
}

export default Home;