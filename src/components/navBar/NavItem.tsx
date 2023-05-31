import { Box, Flex, Text } from '@chakra-ui/core';
import React from 'react';

type Props={
    item_icon: any
    item_name: string
    item_value: any 
    item_space:number
    item_color?:string
}

const NavItem: React.FC<Props> = ({item_icon, item_name, item_value, item_space, item_color}) => {
  return (
    <Flex flexDir="row" alignItems="center" marginLeft={item_space}>
    <Flex>
      <Box as={item_icon} size="24px" color="gray.400" />
      <Text fontWeight="bold" marginLeft={1} color="gray.400">
        {item_name}:
      </Text>
    </Flex>
    <Text fontWeight="normal" color={item_color ? item_color :"blue.300"} marginLeft={1}>
      {item_value}
    </Text>
  </Flex>
  );
}

export default NavItem;