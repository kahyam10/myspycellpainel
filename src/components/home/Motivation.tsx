import { Flex } from '@chakra-ui/core';
import React from 'react';
import TextBody from './components/TextBody';
import TextTitle from './components/TextTitle';

// import { Container } from './styles';

const Motivation: React.FC = () => {
  return (
      <Flex flexDir="column">
          <TextTitle>
            Por que monitorar um dispositivo?
          </TextTitle>
          <TextBody>
            Cada vez mais os celulares estão presentes em nossas vidas
          </TextBody>
      </Flex>
  );
}

export default Motivation;