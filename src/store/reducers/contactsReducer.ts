import { ContactActionTypes } from "../actions/contactActions";
import * as actionTypes from "../actionTypes";
import { contactsInitialState } from "../initialStates/contactsInitialState";

const contactsReducer = (
  state: ContactState = contactsInitialState,
  action: ContactActionTypes
): ContactState => {
  switch (action.type) {
    case actionTypes.SET_CONTACTS:
      const contacts: IContact[] = action.payload;
      return {
        ...state,
        state: contacts,
      };
    default:
      return state;
  }
};

export default contactsReducer;
