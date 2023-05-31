import { Flex } from "@chakra-ui/core";
import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";
import SearcInput from "../../input/searchInput";
import TinderContactListItem from "./TinderContactListItem";
// import { Container } from './styles';

type Props = {
  contacts: ITinderContacts[];
  active?: ITinderContacts;
  setActive: React.Dispatch<
    React.SetStateAction<ITinderContacts | undefined>
  >;
};

const TinderContactList: React.FC<Props> = ({
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

      {contacts.map((contact: ITinderContacts) => {
        if (search === "") {
          return (
            <TinderContactListItem
              contact={contact}
              setActive={setActive}
              active={contact === active}
            />
          );
        } else {
          if (contact.name.toLowerCase().includes(search)) {
            return (
              <TinderContactListItem
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

export default TinderContactList;
