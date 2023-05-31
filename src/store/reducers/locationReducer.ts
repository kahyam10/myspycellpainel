import { LocationActionTypes } from "../actions/locationActions";
import * as actionTypes from "../actionTypes";
import { locationInitialState } from "../initialStates/locationInitialState";

const locationReducer = (
  state: LocationState = locationInitialState,
  action: LocationActionTypes
): LocationState => {
  switch (action.type) {
    case actionTypes.SET_LOCATION:
      const location: ILocation[] = action.payload;
      return {
        ...state,
        state: location,
      };
    default:
      return state;
  }
};

export default locationReducer;
