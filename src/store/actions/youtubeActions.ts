import { Dispatch } from "redux";
import { SET_YOUTUBE } from "../actionTypes";

interface SetYoutubeAction {
  type: typeof SET_YOUTUBE;
  payload: IYoutube[];
}

export const SetYoutube = (data: IYoutube[]) => async (
    dispatch: Dispatch<SetYoutubeAction>
  ) => {
    try {
      dispatch({
        type: SET_YOUTUBE,
        payload:data,
      });
    } catch (error) {}
  };

  export type YoutubeActionTypes = SetYoutubeAction;