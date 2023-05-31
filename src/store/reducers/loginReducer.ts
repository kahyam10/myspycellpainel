
import { LoginActionTypes } from "../actions/loginActions";
import * as actionTypes from "../actionTypes";

const initialState: LoginState = {
  state: null,
};

const loginReducer = (
  state = initialState,
  action: LoginActionTypes
): LoginState => {
  switch (action.type) {
    case actionTypes.SET_LOGIN:
      const login: ILogin = action.payload;
      return {
        ...state, state:login,
      };
    default:
      return state;
  }
};

export default loginReducer;
