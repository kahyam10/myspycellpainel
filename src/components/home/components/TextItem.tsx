import { Text } from '@chakra-ui/core';
import React, { ReactNode } from 'react';


type Props = {
    children?: ReactNode;
  };

const TextItem: React.FC<Props> = ({children}) => {
  return (
      <Text>
          {children}
      </Text>
  );
}

export default TextItem;