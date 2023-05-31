import { IUser, UserState } from "../../type";
import { UserActionTypes } from "../actions/userActions";
import * as actionTypes from "../actionTypes";
import { userInitialState } from "../initialStates/userInitialState";

const userReducer = (
  state: UserState = userInitialState,
  action: UserActionTypes
): UserState => {
  switch (action.type) {
    case actionTypes.SET_USER:
      const user: IUser | null = action.payload;
      return {
        ...state,
        state: user,
      };
    default:
      return state;
  }
};

export default userReducer;
