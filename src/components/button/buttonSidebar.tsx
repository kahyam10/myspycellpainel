import React from "react";
import { Box, Text, Button as ChakraButton } from "@chakra-ui/core";
import { useRouter } from "next/router";

type Props = {
  name: string;
  link: string;
  icon: any;
};

const ButtonSidebar: React.FC<Props> = ({ name, link, icon }) => {
  var router = useRouter();

  function handleNavigate(link: string) {
    location.href = "#top";
    router.push("/dashboard" + link);
  }

  return (
    <ChakraButton
      onClick={() => handleNavigate(link)}
      variant="ghost"
      width="100%"
      height="50px"
      backgroundColor="gray.800"
      marginTop={1}
      _hover={{
        paddingLeft: "24px",
        backgroundColor: "gray.600",
      }}
    >
      <Box as={icon} size="32px" />
      <Text textAlign="left" width="100%" fontSize="1.2rem" marginLeft={2}>
        {name}
      </Text>
    </ChakraButton>
  );
};

export default ButtonSidebar;
