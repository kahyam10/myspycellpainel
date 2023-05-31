import {
    CircularProgress,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Spinner,
} from "@chakra-ui/core";
import React from "react";
import { IconType } from "react-icons/lib";
import { MdSearch } from "react-icons/md";

type Props = {
  placeHolder: string;
  isLoading: boolean;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

const SearcInput: React.FC<Props> = ({
  placeHolder,
  isLoading,
  value,
  setValue,
}) => {
  return (
    <InputGroup width="100%">
      <Input
        pr="4.5rem"
        type="text"
        placeholder={placeHolder}
        backgroundColor="gray.700"
        color="blue.500"
        height="3.6rem"
      
        value={value}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setValue(event.currentTarget.value)
        }
      />
      <InputRightElement width="4.5rem" height="100%">
        {!isLoading ? (
          <IconButton
            size="md"
            fontSize="25px"
            icon={MdSearch}
            aria-label="search"
            backgroundColor="blue.600"
            onClick={() => setValue(value)}
          />
        ) : (
          <CircularProgress
          isIndeterminate 
          color="blue"
          trackColor="red"
          thickness={0.3}
          size="2rem"
          capIsRound
          />
        )}
      </InputRightElement>
    </InputGroup>
  );
};

export default SearcInput;
