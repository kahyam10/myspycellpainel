import { Text } from '@chakra-ui/core';
import React, { ReactNode } from 'react';


type Props = {
    children?: ReactNode;
  };

const TextBody: React.FC<Props> = ({children}) => {
  return (
      <Text fontSize={16} marginTop={2} style={{textIndent:"2rem"}}>
          {children}
      </Text>
  );
}

export default TextBody;