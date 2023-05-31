import { Box, Flex} from "@chakra-ui/core";
import React from "react";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
type Props = {
  value: boolean;
  setValue: React.Dispatch<React.SetStateAction<boolean>>;
  isSelectionMode: boolean;
};

const SelectItemButton: React.FC<Props> = ({
  value,
  setValue,
  isSelectionMode,
}) => {
  return (
    <Flex
      display={isSelectionMode ? "flex" : "none"}
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      onClick={() => setValue(!value)}
      paddingLeft={2}
      paddingRight={1}
      paddingTop={1}
      paddingBottom={1}
      cursor="pointer"
      height="100%"
      backgroundColor="gray.600"
    >
      <Box
        as={value ? MdCheckBox : MdCheckBoxOutlineBlank}
        color={value ? "blue.600" : "gray.400"}
        fontSize="1.5rem"
      />
    </Flex>
  );
};

export default SelectItemButton;
