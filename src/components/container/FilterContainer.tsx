import { Text, Flex } from '@chakra-ui/core';
import React, { ReactNode } from 'react';

type Props={
    text:string;
    children?: ReactNode;
}

const FilterContainer: React.FC<Props> = ({text, children}) => {
  return (
    <Flex
    flexDir="row"
    borderRadius={4}
    border="solid 2px"
    borderColor="blue.600"
    padding={2}
    width="fit-content"
    marginTop={2}
  >
    <Text
      fontWeight="bold"
      color="gray.400"
      fontSize="1.2rem"
      marginRight={2}
    >
      {text}
    </Text>
          {children}
      </Flex>
  );
}

export default FilterContainer;