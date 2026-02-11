import {
  Flex,
  Text,
  useColorModeValue,
  Image,
  Button,
  Spacer,
} from "@chakra-ui/react";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import {useNavigate} from "react-router-dom";
import {changeLocalStorage} from "../../services/Storage";

export const Header = () => {
  const { isLoggedIn,setIsLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();
  const logout =() =>{
    changeLocalStorage({login: false});
    setIsLoggedIn(false);
    navigate("/");
  }

  return (
    <Flex
      as="header"
      align="center"
      bg={useColorModeValue("black", "blue")}
      color="white"
      padding="1rem"
      boxShadow="md"
    >
      <Image
        height={10}
        src="https://hermes.digitalinnovation.one/assets/diome/logo.png"
      />
      <Text
        marginLeft={5}
        fontSize={30}
        fontWeight="bold"
        fontFamily={"monospace"}
      >
        Dio Bank
      </Text>
      <Spacer />
      {
        isLoggedIn && (
            <Button colorScheme="red" onClick={()=> logout() }>Sair</Button>
          )
      }
    </Flex>
  );
};
