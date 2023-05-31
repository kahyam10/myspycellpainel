import { Dispatch } from "redux";
import { SET_TINDER } from "../actionTypes";

interface SetTinderAction {
  type: typeof SET_TINDER;
  payload: ITinderContacts[];
}

export const SetTinder = (data: ITinderContacts[]) => async (
    dispatch: Dispatch<SetTinderAction>
  ) => {
    try {
      dispatch({
        type: SET_TINDER,
        payload:data,
      });
    } catch (error) {}
  };

  export type TinderActionTypes = SetTinderAction;