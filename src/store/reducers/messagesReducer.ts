import { MessageActionTypes } from "../actions/messageActions";
import * as actionTypes from "../actionTypes";
import { messagesInitialState } from "../initialStates/messagesInitialState";

const messagesReducer = (
  state: MessageState = messagesInitialState,
  action: MessageActionTypes
): MessageState => {
  switch (action.type) {
    case actionTypes.SET_MESSAGES:
      const messages: IMessage[] = action.payload;
      return {
        ...state,
        state: messages,
      };
    default:
      return state;
  }
};

export default messagesReducer;
