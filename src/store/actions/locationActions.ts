import { Dispatch } from "redux";
import { SET_LOCATION } from "../actionTypes";

interface SetLocationAction {
  type: typeof SET_LOCATION;
  payload: ILocation[];
}

export const SetLocations = (data: ILocation[]) => async (
    dispatch: Dispatch<SetLocationAction>
  ) => {
    try {
      dispatch({
        type: SET_LOCATION,
        payload:data,
      });
    } catch (error) {}
  };

  export type LocationActionTypes = SetLocationAction;