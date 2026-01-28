import {Box, Flex, Text,useColorModeValue, Image} from "@chakra-ui/react";

export const Header  = () => {
  return(
    <Flex
    as="header"
    align="center"
    justify="left-start"
    bg={useColorModeValue('black', 'blue')}
    color="white"
    padding="1rem"
    boxShadow="md"
    >
        <Image height={10} src = "https://hermes.digitalinnovation.one/assets/diome/logo.png" />
        <Text marginLeft={5} fontSize={30} fontStyle={"bold"} fontFamily={"monospace"}>Dio Bank</Text>
    </Flex>


  )
}
