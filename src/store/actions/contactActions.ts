import { Dispatch } from "redux";
import { SET_CONTACTS } from "../actionTypes";

interface SetContactAction {
  type: typeof SET_CONTACTS;
  payload: IContact[];
}

export const SetContacts = (data: IContact[]) => async (
  dispatch: Dispatch<SetContactAction>
  ) => {
    try {
      dispatch({
        type: SET_CONTACTS,
        payload:data,
      });
    } catch (error) {}
  };

  export type ContactActionTypes = SetContactAction;