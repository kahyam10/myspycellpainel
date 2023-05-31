import { Dispatch } from "redux";
import { SET_WHATSAPP } from "../actionTypes";

interface SetWhatsappAction {
  type: typeof SET_WHATSAPP;
  payload: IWhatsappContacts[];
}

export const SetWhatsapp = (data: IWhatsappContacts[]) => async (
    dispatch: Dispatch<SetWhatsappAction>
  ) => {
    try {
      dispatch({
        type: SET_WHATSAPP,
        payload:data,
      });
    } catch (error) {}
  };

  export type WhatsappActionTypes = SetWhatsappAction;