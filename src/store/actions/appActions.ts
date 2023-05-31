import { Dispatch } from "redux";
import { SET_APP } from "../actionTypes";

interface SetAppAction {
  type: typeof SET_APP;
  payload: IApp[];
}

export const SetApps = (data: IApp[]) => async (
    dispatch: Dispatch<SetAppAction>
  ) => {
    try {
      dispatch({
        type: SET_APP,
        payload:data,
      });
    } catch (error) {}
  };

  export type AppActionTypes = SetAppAction;