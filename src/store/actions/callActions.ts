import { Dispatch } from "redux";
import { SET_CALLS } from "../actionTypes";

interface SetCallAction {
  type: typeof SET_CALLS;
  payload: ICall[];
}

export const SetCalls = (data: ICall[]) => async (
    dispatch: Dispatch<SetCallAction>
  ) => {
    try {
      dispatch({
        type: SET_CALLS,
        payload:data,
      });
    } catch (error) {}
  };

  export type CallActionTypes = SetCallAction;