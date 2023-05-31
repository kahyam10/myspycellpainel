import {
  Flex,
  Text,
  Box,
  Link,
  IconButton,
  CircularProgress,
} from "@chakra-ui/core";
import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import LocationItem from "./LocationItem";
type Props = {
  location: ILocationDays;
  currentLocation: ILocation;
  setCurrentLocation: React.Dispatch<React.SetStateAction<ILocation>>;
  setActiveDay: React.Dispatch<React.SetStateAction<ILocationDays | undefined>>;
  activeDay: ILocationDays | undefined;
};

const LocationDayItem: React.FC<Props> = ({
  location,
  currentLocation,
  setCurrentLocation,
  activeDay,
  setActiveDay,
}) => {
  const [ItemCount, setItemCount] = useState<number>(10);
  const [LoadMore, setLoadMore] = useState<boolean>(true);
  const [FilterList, setFilterList] = useState<ILocation[]>(location.locations);

  var loadMore = () => {
    if (ItemCount < FilterList.length) {
      setTimeout(() => {
        setLoadMore(true);
        setItemCount(ItemCount + 20);
      }, 500);
    } else {
      setLoadMore(false);
    }
  };

  return (
    <Flex
    marginTop={2}
    width="100%"
    cursor="pointer"
    alignItems="center"
    flexDir="column"
    justifyContent="center"
    borderRadius={4}
    border="solid 2px"
    borderColor={location === activeDay ? "blue.700" : "blue.500"}
    >
      <Flex
      backgroundColor={location === activeDay ? "blue.700" : "blue.500"}
        padding={2}
        flexDirection="column"
        justifyContent="center"
        height="50px"
        alignItems="center"
        width="100%"
        onClick={() =>
          setActiveDay(location === activeDay ? undefined : location)
        }
      >
        <Text
          marginLeft={1}
          fontSize="0.9rem"
          width="100%"
          textAlign="center"
          color="gray:500"
          fontWeight="medium"
        >
          {location.day[0] + "-" + location.day[1] + "-" + location.day[2]}
        </Text>
      </Flex>
      {location === activeDay ? (
        <Flex flexDir="column" width="95%" marginBottom={1} marginTop={1}>
          <InfiniteScroll
            style={{ overflow: "hidden" }}
            dataLength={ItemCount}
            next={loadMore}
            hasMore={LoadMore}
            loader={
              <Flex width="100%" justifyContent="center" marginTop={2}>
                <CircularProgress
                  isIndeterminate
                  color="blue"
                  trackColor="red"
                  thickness={0.3}
                  size="2rem"
                  capIsRound
                />
              </Flex>
            }
            endMessage={<></>}
          >
            {FilterList.slice(0, ItemCount).map((item: ILocation) => {
              return (
                <LocationItem
                  location={item}
                  currentLocation={currentLocation}
                  setCurrentLocation={setCurrentLocation}
                />
              );
            })}
          </InfiniteScroll>
        </Flex>
      ) : (
        <></>
      )}
    </Flex>
  );
};

export default LocationDayItem;
