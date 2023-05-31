import { CallActionTypes } from "../actions/callActions";
import * as actionTypes from "../actionTypes";
import { callsInitialState } from "../initialStates/callsInitialState";

const callsReducer = (
  state: CallState = callsInitialState,
  action: CallActionTypes
): CallState => {
  switch (action.type) {
    case actionTypes.SET_CALLS:
      const calls: ICall[] = action.payload;
      return {
        ...state,
        state: calls,
      };
    default:
      return state;
  }
};

export default callsReducer;
