import React from 'react';
import { Button, AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody, AlertDialogFooter } from '@chakra-ui/core';


type Props = {
    
    isOpen:boolean;
    count:number;
    setIsOpen:React.Dispatch<React.SetStateAction<boolean>>;
    del:React.Dispatch<void>;
  };

const DeleteDialog: React.FC<Props> = ({isOpen, count, setIsOpen, del}) => {
    
  const onClose = () => setIsOpen(false)
  const onDelete=() => {
      del();
      setIsOpen(false);
  };

  const cancelRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  return (
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Apagar Itens
            </AlertDialogHeader>

            <AlertDialogBody>
              Tem certeza que deseja apagar {count} {count<2 ? "item":"itens"}?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} backgroundColor="blue.600" onClick={onClose}>
                Cancelar
              </Button>
              <Button backgroundColor="red.500" onClick={onDelete} ml={3}>
                Deletar
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
  );
}

export default DeleteDialog;