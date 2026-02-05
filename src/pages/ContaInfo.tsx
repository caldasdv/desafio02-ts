import { Link, Text } from "@chakra-ui/react";

const ContaInfo = () => {
  return (
    <>
      <Text fontSize={"3xl"} fontWeight={"bold"}>
        {" "}
        Informações da conta
      </Text>
      <Link href="/conta/1">
        <Text fontSize={"xl"}>Ver conta</Text>
      </Link>
    </>
  );
};

export default ContaInfo;
