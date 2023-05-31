
import { funAddNotification, funRemoveNotification, funUpdateNotification } from "../../services/NotificationFunctions";

import { AddNotification, NotificationActionTypes, UpdateNotification } from "../actions/notificationActions";
import { ADD_NOTIFICATION, DELETE_NOTIFICATION, CLEAR_NOTIFICATIONS, UPDATE_NOTIFICATION } from "../actionTypes";

const notificationReducer = (
  state: UpdateState = { state: [] },
  action: NotificationActionTypes
): UpdateState => {
  switch (action.type) {
    case ADD_NOTIFICATION:
      let add: IUpdate = action.payload;
      return {
        ...state,
        state: funAddNotification(add, state.state),
      };
    case DELETE_NOTIFICATION:
      let delet: IUpdate = action.payload;
      return {
        ...state,
        state: funRemoveNotification(delet, state.state),
      };
    case CLEAR_NOTIFICATIONS:
      return {
        ...state,
        state: [],
      };
      case UPDATE_NOTIFICATION:
          let update:IUpdate = action.payload;
          return {
              ...state,
              state:funUpdateNotification(update, state.state)
          }
    default:
      return state;
  }
};

export default notificationReducer;
