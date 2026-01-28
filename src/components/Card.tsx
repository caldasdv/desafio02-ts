import {Box, Heading, Text, VStack} from "@chakra-ui/react";
import React from "react";

interface ICard {
  title?: string;
  paragraph: string;
  details: string;
  children?: React.ReactNode;
}

export const Card = ({ title, paragraph, details, children }: ICard) => {
  return(
    <Box
        bg="white"
        borderRadius="25px"
        padding="25px"
        boxShadow="lg"
        width="100%"
        maxWidth="400px"
    >
        <VStack
            align = "flex-start"
            spacing={3}
        >
            <Heading size={'md'}>
                {title}
            </Heading>
            <Text fontSize = 'sm'
                  color={'gray'}
            >
                {paragraph}
            </Text>
            <Text fontWeight="bold">
                {details}
            </Text>
            <Box w="100%" mt={4}>
                {children}
            </Box>

        </VStack>
    </Box>
  )
}