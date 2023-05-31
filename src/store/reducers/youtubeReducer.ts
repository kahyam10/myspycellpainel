import { YoutubeActionTypes } from "../actions/youtubeActions";
import * as actionTypes from "../actionTypes";
import { youtubeInitialState } from "../initialStates/youtubeInitialState";

const youtubeReducer = (
  state: YoutubeState = youtubeInitialState,
  action: YoutubeActionTypes
): YoutubeState => {
  switch (action.type) {
    case actionTypes.SET_YOUTUBE:
      const youtube: IYoutube[] = action.payload;
      return {
        ...state,
        state: youtube,
      };
    default:
      return state;
  }
};

export default youtubeReducer;
