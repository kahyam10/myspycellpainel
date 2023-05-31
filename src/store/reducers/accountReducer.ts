import { AccountActionTypes } from "../actions/accountActions";
import * as actionTypes from "../actionTypes";
import { accountInitialState } from "../initialStates/accountInitialState";

const accountReducer = (
  state: AccountState = accountInitialState,
  action: AccountActionTypes
): AccountState => {
  switch (action.type) {
    case actionTypes.SET_ACCOUNT:
      const account: IAccount | null = action.payload;
      return {
        ...state,
        state: account,
      };
    case actionTypes.SET_ACTIVE_DEVICE:
      var newState: any = state.state;
      newState.active_device = action.payload;
      return {
        ...state,
        state: newState,
      };
    default:
      return state;
  }
};

export default accountReducer;
