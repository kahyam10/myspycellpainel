import { Dispatch } from "redux";
import { SET_MESSAGES } from "../actionTypes";

interface SetMessageAction {
  type: typeof SET_MESSAGES;
  payload: IMessage[];
}

export const SetMessages = (data: IMessage[]) => async (
    dispatch: Dispatch<SetMessageAction>
  ) => {
    try {
      dispatch({
        type: SET_MESSAGES,
        payload:data,
      });
    } catch (error) {}
  };

  export type MessageActionTypes = SetMessageAction;