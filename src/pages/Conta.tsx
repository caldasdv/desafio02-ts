import { Center, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import CardInfo from "../components/CardInfo";
import { api } from "../api";
import { AppContext } from "../components/AppContext";

interface UserData {
  email: string;
  senha: string;
  nome: string;
  balance: number;
  id: string;
}

export const Conta = () => {
  const [userData, setUserData] = useState<null | UserData>();
  useEffect(() => {
    const getData = async () => {
      const data: any | UserData = await api;
      setUserData(data);
    };
    getData();
  }, []);
  const actualData = new Date();

  const { id } = useParams();
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(AppContext);
  !isLoggedIn && navigate("/");
  if (userData && id !== userData.id) {
    navigate("/");
  }
  return (
    <Center bgColor="gray" minHeight="100vh" minH="calc(100vh - 77px)">
      <SimpleGrid columns={2} spacing={2}>
        {userData === undefined || userData === null ? (
          <Center>
            <Spinner size="xl" />
          </Center>
        ) : (
          <>
            <CardInfo
              mainContent={` Bem vindo(a) ${userData?.nome}`}
              content={`${actualData.getDay()}/${actualData.getMonth()}/${actualData.getFullYear()} ${actualData.getHours()}:${actualData.getMinutes()} `}
            />
            <CardInfo
              mainContent={"Saldo"}
              content={`R$ ${userData.balance}`}
            />
          </>
        )}
      </SimpleGrid>
    </Center>
  );
};
export default Conta;
