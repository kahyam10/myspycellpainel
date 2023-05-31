import { Text } from '@chakra-ui/core';
import React, { ReactNode } from 'react';


type Props = {
    children?: ReactNode;
  };

const TextTitle: React.FC<Props> = ({children}) => {
  return (
      <Text fontWeight="bold" fontSize={32} color="blue.500" textAlign="center">
          {children}
      </Text>
  );
}

export default TextTitle;