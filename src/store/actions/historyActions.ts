import { Dispatch } from "redux";
import { SET_HISTORY } from "../actionTypes";

interface SetHistoryAction {
  type: typeof SET_HISTORY;
  payload: IHistory[];
}

export const SetHistory = (data: IHistory[]) => async (
    dispatch: Dispatch<SetHistoryAction>
  ) => {
    try {
      dispatch({
        type: SET_HISTORY,
        payload:data,
      });
    } catch (error) {}
  };

  export type HistoryActionTypes = SetHistoryAction;