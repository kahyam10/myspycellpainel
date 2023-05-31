import { GalleryActionTypes } from "../actions/galleryActions";
import * as actionTypes from "../actionTypes";
import { galleryInitialState } from "../initialStates/galleryInitialState";

const galleryReducer = (
  state: GalleryState = galleryInitialState,
  action: GalleryActionTypes
): GalleryState => {
  switch (action.type) {
    case actionTypes.SET_GALLERY:
      const gallery: IGallery[] = action.payload;
      return {
        ...state,
        state: gallery,
      };
    default:
      return state;
  }
};

export default galleryReducer;
