import React from 'react';
import { Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/core";


const InputLogin: React.FC<ChakraInputProps> = (props) => {
    return (
        <ChakraInput
            height="50px"
            backgroundColor="gray.800"
            borderColor="gray.500"
            focusBorderColor="blue.600"
            borderRadius="sm"
            isRequired={true}
            
            {...props}
        />
    );
}

export default InputLogin;