import {  Flex, Button, Collapse } from "@chakra-ui/core";
import React, {  useState } from "react";
import {
  MdSelectAll,
  MdDeleteForever,
  MdCancel,
} from "react-icons/md";
import DeleteDialog from "../alert/DeleteDialog";
import EditButton from "../button/editButton";

type Props = {
  text: string;
  cancel: React.Dispatch<void>;
  IsAllItensSelected: boolean;
  select: boolean;
  selectionCount: number;
  selectionMode: React.Dispatch<React.SetStateAction<boolean>>;
  selectAll: React.Dispatch<void>;
  del: React.Dispatch<void>;
};

const EditContainer: React.FC<Props> = ({
  text,
  cancel,
  select,
  selectionMode,
  selectAll,
  del,
  selectionCount,
  IsAllItensSelected
}) => {
  const [Show, setShow] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);

 const OpenDialog=()=>setIsOpen(true);
  const EditClick=()=>{
    setShow(true);
    selectionMode(true);
  }

  return (
    <>
      <Flex
        flexDir="row"
        borderRadius={4}
        border="solid 2px"
        borderColor="blue.600"
        padding={2}
        width="fit-content"
        marginTop={2}
        alignItems="center"
      >
        <Button
          fontWeight="bold"
          backgroundColor="blue.600"
          fontSize="1 rem"
          marginRight={2}
          onClick={EditClick}
        >
          {text}
        </Button>
        <Collapse
          isOpen={Show}
          display="flex"
          flexDir="row"
          alignItems="center"
          justifyContent="center"
        >
          <EditButton
          show={select}
            fun={selectAll}
            icon={MdSelectAll}
            name={IsAllItensSelected ? "Desmarcar Todos":"Selecionar Todos"}
          />
          <EditButton
            show={select}
            fun={OpenDialog}
            icon={MdDeleteForever}
            name={"Apagar"}
            color="orange.500"
          />
          <EditButton
            show={select}
            fun={cancel}
            icon={MdCancel}
            name={"Cancelar"}
            color="red.500"
          />
        </Collapse>
      </Flex>
      <DeleteDialog
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        del={del}
        count={selectionCount}
      />
    </>
  );
};

export default EditContainer;
