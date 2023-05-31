import { Dispatch } from "redux";
import { SET_GALLERY } from "../actionTypes";

interface SetGalleryAction {
  type: typeof SET_GALLERY;
  payload: IGallery[];
}

export const SetGallery = (data: IGallery[]) => async (
    dispatch: Dispatch<SetGalleryAction>
  ) => {
    try {
      dispatch({
        type: SET_GALLERY,
        payload:data,
      });
    } catch (error) {}
  };

  export type GalleryActionTypes = SetGalleryAction;