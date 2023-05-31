import { AppActionTypes } from "../actions/appActions";
import * as actionTypes from "../actionTypes";
import { appInitialState } from "../initialStates/appInitialState";

const appReducer = (
  state: AppState = appInitialState,
  action: AppActionTypes
): AppState => {
  switch (action.type) {
    case actionTypes.SET_APP:
      const app: IApp[] = action.payload;
      return {
        ...state,
        state: app,
      };
    default:
      return state;
  }
};

export default appReducer;
