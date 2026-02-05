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

export const Header = () => {
  const context = useContext(AppContext);
  console.log("Header", context);
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
      <Button colorScheme="red">Sair</Button>
    </Flex>
  );
};
