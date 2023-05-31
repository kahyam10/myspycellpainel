import { Button, Flex, Grid } from "@chakra-ui/core";
import React, { useState } from "react";
import { MdVpnKey } from "react-icons/md";
import InputLogin from "../../input/InputLogin";
import InfoItem from "../../item/infoItem";

type Props = {
  setButton: React.Dispatch<React.SetStateAction<boolean>>;
  button: boolean;
};

const ChangeAccountPassword: React.FC<Props> = ({ button, setButton }) => {
  const [passwordA, setPasswordA] = useState<string>("");
  const [password1, setPassword1] = useState<string>("");
  const [password2, setPassword2] = useState<string>("");

  return (
    <Flex marginTop={4}>
      {!button ? (
       <Flex>
         <InfoItem
            item_name="Senha"
            item_icon={MdVpnKey}
            item_value={""}
            item_space={2}
          />
       <Button onClick={() => setButton(!button)} backgroundColor="blue.500">
          Alterar senha atual
        </Button>
       </Flex>
      ) : (
        <Grid templateColumns="1fr" rowGap={2}>
          <InputLogin
            paddingLeft={4}
            placeholder="Senha atual"
            type="password"
            value={passwordA}
            onChange={(event: React.FormEvent<HTMLInputElement>) =>
              setPasswordA(event.currentTarget.value)
            }
            backgroundColor="gray.600"
            _active={{
              background: "gray.200",
            }}
          />
          <InputLogin
            paddingLeft={4}
            placeholder="Senha"
            type="password"
            value={password1}
            onChange={(event: React.FormEvent<HTMLInputElement>) =>
              setPassword1(event.currentTarget.value)
            }
            backgroundColor="gray.600"
            _active={{
              background: "gray.200",
            }}
          />
          <InputLogin
            paddingLeft={4}
            placeholder="Repetir nova senha"
            type="password"
            value={password2}
            onChange={(event: React.FormEvent<HTMLInputElement>) =>
              setPassword2(event.currentTarget.value)
            }
            backgroundColor="gray.600"
            _active={{
              background: "gray.200",
            }}
          />
          <Button
            onClick={() => setButton(!button)}
            backgroundColor="blue.500"
            marginTop={2}
          >
            Confirmar nova senha
          </Button>
        </Grid>
      )}
    </Flex>
  );
};

export default ChangeAccountPassword;
