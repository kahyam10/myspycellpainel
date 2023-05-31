import { Box, Flex, Heading } from "@chakra-ui/core";
import React from "react";

type Props = {
  letter: string;
  size:string;
  letterSize:string
};

const ItemLetter: React.FC<Props> = ({ letter, size, letterSize }) => {
  return (
    <Flex
      flexDir="row"
      justifyContent="center"
      alignItems="center"
      width={size}
      height={size}
      backgroundColor="gray.900"
      borderRadius="50%"
      border="solid 1.5px #ddd"
    >
      <Heading fontWeight="bold" fontSize={letterSize} textAlign="center">
        {letter}
      </Heading>
    </Flex>
  );
};

export default ItemLetter;
