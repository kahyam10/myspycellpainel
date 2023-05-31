import { Box, Flex, Text } from "@chakra-ui/core";
import React from "react";
import { IconType } from "react-icons";
type Props = {
  name: string;
  value?: boolean;
  fun:React.Dispatch<void>;
  icon: IconType;
  color?:string;
  show:boolean;
};

const EditButton: React.FC<Props> = ({ name, value, fun, icon, color, show }) => {
  return (
    <Flex flexDir="column" alignItems="center" onClick={()=>fun()} marginLeft={4} cursor="pointer" display={show ? "flex": "none"}>
      <Box as={icon} color={color ? color : value ? "blue.500" : "gray.300"} />
      <Text color={color ? color : value ? "blue.500" : "gray.300"} fontSize="0.8rem">
        {name}
      </Text>
    </Flex>
  );
};

export default EditButton;
