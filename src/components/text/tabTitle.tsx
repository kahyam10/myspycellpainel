import { Heading } from '@chakra-ui/core';
import React, { ReactNode } from 'react';

type Props={
    children?:ReactNode;
}

const TabTitle: React.FC<Props> = ({children}) => {
  return (
    <Heading color="blue.600" marginBottom={4}>
    {children}
  </Heading>
  );
}

export default TabTitle;