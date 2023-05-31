import { Dispatch } from "redux";
import { SET_INSTAGRAM } from "../actionTypes";

interface SetInstagramAction {
  type: typeof SET_INSTAGRAM;
  payload: IInstagramContacts[];
}

export const SetInstagram = (data: IInstagramContacts[]) => async (
    dispatch: Dispatch<SetInstagramAction>
  ) => {
    try {
      dispatch({
        type: SET_INSTAGRAM,
        payload:data,
      });
    } catch (error) {}
  };

  export type InstagramActionTypes = SetInstagramAction;