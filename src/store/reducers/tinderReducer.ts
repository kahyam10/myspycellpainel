import { TinderActionTypes } from "../actions/tinderActions";
import * as actionTypes from "../actionTypes";
import { tinderInitialState } from "../initialStates/tinderInitialState";

const tinderReducer = (
  state: TinderState = tinderInitialState,
  action: TinderActionTypes
): TinderState => {
  switch (action.type) {
    case actionTypes.SET_TINDER:
      const tinder: ITinderContacts[] = action.payload;
      return {
        ...state,
        state: tinder,
      };
    default:
      return state;
  }
};

export default tinderReducer;
