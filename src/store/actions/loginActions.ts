import { Dispatch } from "redux";
import { SET_LOGIN } from "../actionTypes";

interface SetLoginAction {
  type: typeof SET_LOGIN;
  payload: ILogin;
}

export const SetLogin = (login: ILogin) => async (
  dispatch: Dispatch<SetLoginAction>
) => {
  try {
    dispatch({
      type: SET_LOGIN,
      payload: login,
    });
  } catch (error) {}
};

export type LoginActionTypes = SetLoginAction;
