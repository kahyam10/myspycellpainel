import { Box, Flex, Text } from "@chakra-ui/core";
import React from "react";
import { IconType } from "react-icons";
type Props = {
  name: string;
  value: boolean;
  setValue: React.Dispatch<React.SetStateAction<boolean>>;
  icon: IconType;
};

const FilterButton: React.FC<Props> = ({ name, value, setValue, icon }) => {
  return (
    <Flex flexDir="column" alignItems="center" onClick={()=>setValue(!value)} marginLeft={2} cursor="pointer">
      <Box as={icon} color={value ? "blue.500" : "gray.500"} />
      <Text color={value ? "blue.500" : "gray.500"} fontSize="0.8rem">
        {name}
      </Text>
    </Flex>
  );
};

export default FilterButton;
