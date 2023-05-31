import { Dispatch } from "redux";
import {
  ADD_NOTIFICATION,
  CLEAR_NOTIFICATIONS,
  DELETE_NOTIFICATION,
  UPDATE_NOTIFICATION,
} from "../actionTypes";

interface AddNotificationAction {
  type: typeof ADD_NOTIFICATION;
  payload: IUpdate;
}
interface DeleteNotificationAction {
  type: typeof DELETE_NOTIFICATION;
  payload: IUpdate;
}
interface ClearNotificationAction {
  type: typeof CLEAR_NOTIFICATIONS;
}
interface UpdateNotificationAction {
  type: typeof UPDATE_NOTIFICATION;
  payload: IUpdate;
}

export const AddNotification = (data: IUpdate) => async (
  dispatch: Dispatch<AddNotificationAction>
) => {
  try {
    dispatch({
      type: ADD_NOTIFICATION,
      payload: data,
    });
  } catch (error) {}
};
export const UpdateNotification = (data: IUpdate) => async (
  dispatch: Dispatch<UpdateNotificationAction>
) => {
  try {
    dispatch({
      type: UPDATE_NOTIFICATION,
      payload: data,
    });
  } catch (error) {}
};
export const DeleteNotification = (data: IUpdate) => async (
  dispatch: Dispatch<DeleteNotificationAction>
) => {
  try {
    dispatch({
      type: DELETE_NOTIFICATION,
      payload: data,
    });
  } catch (error) {}
};
export const ClearNotification = () => async (
  dispatch: Dispatch<ClearNotificationAction>
) => {
  try {
    dispatch({
      type: CLEAR_NOTIFICATIONS,
    });
  } catch (error) {}
};

export type NotificationActionTypes =
  | AddNotificationAction
  | UpdateNotificationAction
  | ClearNotificationAction
  | DeleteNotificationAction;
