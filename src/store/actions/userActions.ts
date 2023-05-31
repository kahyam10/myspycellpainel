import { Dispatch } from "redux";
import { SET_USER } from "../actionTypes";

interface SetUserAction {
  type: typeof SET_USER;
  payload: IUser | null;
}

export const SetUser = (user: IUser | null) => async (
  dispatch: Dispatch<SetUserAction>
) => {
  dispatch({
    type: SET_USER,
    payload: user,
  });
};

export type UserActionTypes = SetUserAction;
