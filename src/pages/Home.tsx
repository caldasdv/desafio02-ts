import { Center } from "@chakra-ui/react";
import { LoginCard } from "../components/LoginCard";

const Home = () =>{
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