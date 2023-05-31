import { Flex, Text, Box, Link, IconButton, Image } from "@chakra-ui/core";
import React, { useEffect, useState } from "react";
import Api from "../../../services/Api";
import { getSmallDate } from "../../../utils/dateFunctions";
import defaultImage from "../../../assets/img/logo.svg";

type Props = {
  gallery: IGallery;
};

const GalleryItem: React.FC<Props> = ({ gallery }) => {
  const [image, setImage] = useState<any>(defaultImage);
  useEffect(() => {
    const loadImage = async () => {
      var img = await Api.get(
        `/device${gallery.device}/gallery/${gallery.file_name}`
      );
      if (img) {
        setImage(
          `http://localhost:3333/device${gallery.device}/gallery/${gallery.file_name}`
        );
      }
    };
    setTimeout(() => {
      loadImage();
    }, 2000);
  }, []);

  return (
    <Flex flexDir="column" alignItems="center">
      <Box
        id={gallery.id.toString()}
        flexDirection="column"
        width="100%"
        backgroundImage={`url(${image})`}
        height="200px"
        backgroundSize="cover"
        backgroundPosition="center"
      />
      <Text color="gray.400" textAlign="center">
        {getSmallDate(Number.parseInt(gallery.date_time))}
      </Text>
    </Flex>
  );
};

export default GalleryItem;
