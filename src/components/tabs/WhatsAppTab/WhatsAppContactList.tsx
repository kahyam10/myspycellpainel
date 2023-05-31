import { Flex } from "@chakra-ui/core";
import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";
import SearcInput from "../../input/searchInput";
import WhatsAppContactListItem from "./WhatsAppContactListItem";
// import { Container } from './styles';

type Props = {
  contacts: IWhatsappContacts[];
  active?: IWhatsappContacts;
  setActive: React.Dispatch<
    React.SetStateAction<IWhatsappContacts | undefined>
  >;
};

const WhatsAppContactList: React.FC<Props> = ({
  contacts,
  active,
  setActive,
}) => {
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  function Search() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }

  useEffect(() => {
    const { query } = router.query;
    if (query) {
      if (query.length > 0) {
        setSearch(query.toString());
      }
    }
  }, []);

  return (
    <Flex flexDir="column" width="35%" minWidth="330px">
      <SearcInput
        placeHolder="Procurar Conversa"
        isLoading={loading}
        value={search}
        setValue={setSearch}
        click={Search}
      />
      
      {contacts.map((contact: IWhatsappContacts) => {
        if (search === "") {
          return (
            <WhatsAppContactListItem
              contact={contact}
              setActive={setActive}
              active={contact === active}
            />
          );
        } else {
          if (contact.name.toLowerCase().includes(search)) {
            return (
              <WhatsAppContactListItem
              key={contact.name}
                contact={contact}
                setActive={setActive}
                active={contact === active}
              />
            );
          }
        }
      })}
    </Flex>
  );
};

export default WhatsAppContactList;
