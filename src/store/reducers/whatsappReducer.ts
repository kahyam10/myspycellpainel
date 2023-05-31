import { WhatsappActionTypes } from "../actions/whatsappActions";
import * as actionTypes from "../actionTypes";
import { whatsappInitialState } from "../initialStates/whatsappInitialState";

const whatsappReducer = (
  state: WhatsappState = whatsappInitialState,
  action: WhatsappActionTypes
): WhatsappState => {
  switch (action.type) {
    case actionTypes.SET_WHATSAPP:
      const whatsapp: IWhatsappContacts[] = action.payload;
      return {
        ...state,
        state: whatsapp,
      };
    default:
      return state;
  }
};

export default whatsappReducer;
