import { InstagramActionTypes } from "../actions/instagramActions";
import * as actionTypes from "../actionTypes";
import { instagramInitialState } from "../initialStates/instagramInitialState";

const instagramReducer = (
  state: InstagramState = instagramInitialState,
  action: InstagramActionTypes
): InstagramState => {
  switch (action.type) {
    case actionTypes.SET_INSTAGRAM:
      const instagram: IInstagramContacts[] = action.payload;
      return {
        ...state,
        state: instagram,
      };
    default:
      return state;
  }
};

export default instagramReducer;
