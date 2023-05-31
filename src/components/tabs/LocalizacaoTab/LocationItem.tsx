import { Flex, Text, Box, Link, IconButton } from "@chakra-ui/core";
import React from "react";
import { getSmallDate } from "../../../utils/dateFunctions";
type Props = {
  location: ILocation;
  currentLocation: ILocation;
  setCurrentLocation: React.Dispatch<React.SetStateAction<ILocation>>;
};

const LocationItem: React.FC<Props> = ({
  location,
  currentLocation,
  setCurrentLocation,
}) => {
  return ( 
    <Flex
      id={location.id.toString()}
      flexDirection="column"
      justifyContent="center"
      height="50px"
      marginTop={1}
      backgroundColor={location === currentLocation ? "gray.700" : "gray.500"}
      padding={2}
      alignItems="center"
      borderRadius={4}
      width="100%"
      cursor="pointer"
      onClick={() => setCurrentLocation(location)}
    >
      <Text
        marginLeft={1}
        fontSize="0.9rem"
        width="100%"
        textAlign="center"
        color={location === currentLocation ? "gray:500" : "blue.500"}
        fontWeight="medium"
      >
        {getSmallDate(Number.parseInt(location.date_time))}
      </Text>
    </Flex>
  );
};

export default LocationItem;
