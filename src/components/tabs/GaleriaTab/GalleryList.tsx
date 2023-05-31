import {
  Box,
  ButtonGroup,
  CircularProgress,
  Flex,
  Grid,
  Heading,
  List,
  Text,
} from "@chakra-ui/core";
import React, { useEffect, useState } from "react";
import { SiInstagram, SiWhatsapp } from "react-icons/si";
import {
  MdInsertDriveFile,
  MdInsertInvitation,
  MdPhotoCamera,
} from "react-icons/md";
import { useRouter } from "next/router";
import TabTitle from "../../text/tabTitle";
import GalleryItem from "./GalleryItem";
import FilterButton from "../../button/filterButton";

type Props = {
  gallery: IGallery[];
};

const GalleryList: React.FC<Props> = ({ gallery }) => {
  const router = useRouter();
  const [Camera, setCamera] = useState<boolean>(true);
  const [Whatsapp, setWhatsapp] = useState<boolean>(false);
  const [Instagram, setInstagram] = useState<boolean>(true);
  const [Loading, setLoading] = useState<boolean>(true);

  const [List, setList] = useState<IGallery[]>(gallery);
  const [Date, setDate] = useState<boolean>(true);
  const [Type, setType] = useState<boolean>(false);

  useEffect(() => {
    console.log(gallery)
    setLoading(true);
    var lista: IGallery[] = [];
    gallery.map((item: IGallery) => {
      switch (item.type) {
        case 1:
          if (Camera) {
            lista.push(item);
          }
          break;
        case 2:
          if (Whatsapp) {
            lista.push(item);
          }
          break;
        case 3:
          if (Instagram) {
            lista.push(item);
          }
          break;
        default:
          return;
      }
    });
    setList(lista);
    setTimeout(() => {
      setLoading(false);
    }, 700);
  }, [Camera, Whatsapp, Instagram]);

  useEffect(() => {
    setLoading(true);
    if (Date) {
      setType(false);
    } else {
      setType(true);
    }
    setTimeout(() => {
      setLoading(false);
    }, 700); 
  }, [Date]);
  useEffect(() => {
    if (Type) {
      setDate(false);
    } else {
      if (Date == false) {
        setDate(true);
      }
    }
  }, [Type]);

  function sortByDate() {
    return (
      <>
        {Loading ? (
          <Flex width="100%" justifyContent="center">
            <CircularProgress
              isIndeterminate
              color="blue"
              trackColor="red"
              thickness={0.3}
              size="2rem"
              capIsRound
            />
          </Flex>
        ) : (
          <Grid
            marginTop={4}
            gridTemplateColumns="1fr 1fr 1fr 1fr 1fr"
            gridColumnGap={2}
            gridRowGap={2}
          >
            {List.map((item: IGallery) => {
              return <GalleryItem gallery={item} />;
            })}
          </Grid>
        )}
      </>
    );
  }

  function sortByType() {
    var retorno = [];
    if (Camera) {
      retorno.push(
        <>
          <Text color="blue.600" fontSize="1.8rem" marginTop={2}>
            Fotos da Câmera
          </Text>
          {Loading ? (
            <Flex width="100%" justifyContent="center">
              <CircularProgress
                isIndeterminate
                color="blue"
                trackColor="red"
                thickness={0.3}
                size="2rem"
                capIsRound
              />
            </Flex>
          ) : (
            <Grid
              marginTop={2}
              gridTemplateColumns="1fr 1fr 1fr 1fr 1fr"
              gridColumnGap={2}
              gridRowGap={2}
            >
              {List.map((item: IGallery) => {
                if (item.type === 1) {
                  return <GalleryItem gallery={item} />;
                } else {
                  return <></>;
                }
              })}
            </Grid>
          )}
        </>
      );
    }
    if (Whatsapp) {
      retorno.push(
        <>
          <Text color="blue.600" fontSize="1.8rem" marginTop={2}>
            Fotos do Whatsapp
          </Text>
          {Loading ? (
            <Flex width="100%" justifyContent="center">
              <CircularProgress
                isIndeterminate
                color="blue"
                trackColor="red"
                thickness={0.3}
                size="2rem"
                capIsRound
              />
            </Flex>
          ) : (
            <Grid
              marginTop={2}
              gridTemplateColumns="1fr 1fr 1fr 1fr 1fr"
              gridColumnGap={2}
              gridRowGap={2}
            >
              {List.map((item: IGallery) => {
                if (item.type === 2) {
                  return <GalleryItem gallery={item} />;
                } else {
                  return <></>;
                }
              })}
            </Grid>
          )}
        </>
      );
    }
    if (Instagram) {
      retorno.push(
        <>
          <Text color="blue.600" fontSize="1.8rem" marginTop={2}>
            Fotos do Instagram
          </Text>
          {Loading ? (
            <Flex width="100%" justifyContent="center">
              <CircularProgress
                isIndeterminate
                color="blue"
                trackColor="red"
                thickness={0.3}
                size="2rem"
                capIsRound
              />
            </Flex>
          ) : (
            <Grid
              marginTop={2}
              gridTemplateColumns="1fr 1fr 1fr 1fr 1fr"
              gridColumnGap={2}
              gridRowGap={2}
            >
              {List.map((item: IGallery) => {
                if (item.type === 3) {
                  return <GalleryItem gallery={item} />;
                } else {
                  return <></>;
                }
              })}
            </Grid>
          )}
        </>
      );
    }

    return retorno;
  }

  return (
    <Flex flexDir="column" width="100%" padding={6}>
      <TabTitle>Galeria de Fotos</TabTitle>
      <Flex flexDir="row">
        <Flex
          flexDir="row"
          borderRadius={4}
          border="solid 2px"
          borderColor="blue.600"
          padding={2}
          width="fit-content"
        >
          <Text
            fontWeight="bold"
            color="gray.400"
            fontSize="1.2rem"
            marginRight={2}
          >
            Exbir:
          </Text>

          <FilterButton
            value={Camera}
            setValue={setCamera}
            icon={MdPhotoCamera}
            name={"Câmera"}
          />
          <FilterButton
            value={Whatsapp}
            setValue={setWhatsapp}
            icon={SiWhatsapp}
            name={"Whatsapp"}
          />
          <FilterButton
            value={Instagram}
            setValue={setInstagram}
            icon={SiInstagram}
            name={"Instagram"}
          />
        </Flex>
        <Flex
          flexDir="row"
          borderRadius={4}
          border="solid 2px"
          borderColor="blue.600"
          padding={2}
          width="fit-content"
          marginLeft={2}
        >
          <Text
            fontWeight="bold"
            color="gray.400"
            fontSize="1.2rem"
            marginRight={2}
          >
            Classificar por:
          </Text>

          <FilterButton
            value={Type}
            setValue={setType}
            icon={MdInsertDriveFile}
            name={"Tipo"}
          />
          <FilterButton
            value={Date}
            setValue={setDate}
            icon={MdInsertInvitation}
            name={"Data/Hora"}
          />
        </Flex>
      </Flex>
      {Date ? sortByDate() : sortByType()}
      <Text color="blue.600" fontWeight="bold" textAlign="left" marginTop={4}>
        Exibindo {List.length} de {gallery.length} Fotos
      </Text>
    </Flex>
  );
};

export default GalleryList;
