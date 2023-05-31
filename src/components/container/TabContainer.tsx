import { Box } from '@chakra-ui/core';
import React, { ReactNode } from 'react';

type Props={
    children?: ReactNode;
}

const TabContainer: React.FC<Props> = ({children}) => {
  return (
      <Box 
      padding={4}
      borderRadius={16}
      backgroundColor="gray.600"
      width="100%"
      maxWidth="100vw"
      height="100%"
      >
          {children}
      </Box>
  );
}

export default TabContainer;