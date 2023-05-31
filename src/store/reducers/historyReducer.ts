import { HistoryActionTypes } from "../actions/historyActions";
import * as actionTypes from "../actionTypes";
import { historyInitialState } from "../initialStates/historyInitialState";

const historyReducer = (
  state: HistoryState = historyInitialState,
  action: HistoryActionTypes
): HistoryState => {
  switch (action.type) {
    case actionTypes.SET_HISTORY:
      const history: IHistory[] = action.payload;
      return {
        ...state,
        state: history,
      };
    default:
      return state;
  }
};

export default historyReducer;
