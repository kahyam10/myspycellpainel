import React, { ReactNode } from 'react';

import {Box, Text} from "@chakra-ui/core"
import { MdAccessTime, MdDateRange } from 'react-icons/md';

type Props={
    children?:ReactNode;
    color?:string;
    text?:string;
}

const ItemText: React.FC<Props> = ({color, text}) => {
  return (
    <Text
    marginLeft={1}
    marginTop={1}
    fontSize="10px"
    height="14px"
    width="100%"
    textAlign="right"
    color={color ? color: "blue.300"}
    fontWeight="medium"
    display="flex"
    flexDir="row"
    justifyContent="flex-end"
  >
    <Box as={MdAccessTime} fontSize="14px" marginRight="2px"/> {text}
  </Text>
  );
}

export default ItemText;