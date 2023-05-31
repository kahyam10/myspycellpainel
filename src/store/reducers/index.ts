import { combineReducers } from "redux";

import accountReducer from "./accountReducer";
import loginReducer from "./loginReducer";
import devicesReducer from "./devicesReducer";
import userReducer from "./userReducer";
import planReducer from "./planReducer";
import contactsReducer from "./contactsReducer";
import callsReducer from "./callsReducer";
import messagesReducer from "./messagesReducer";
import historyReducer from "./historyReducer";
import youtubeReducer from "./youtubeReducer";
import appsReducer from "./appReducer";
import galleryReducer from "./galleryReducer";
import locationReducer from "./locationReducer";
import whatsappReducer from "./whatsappReducer";
import instagramReducer from "./instagramReducer";
import tinderReducer from "./tinderReducer";
import notificationReducer from "./notificationReducer";

const appReducer = combineReducers({
  accountReducer,
  loginReducer,
  devicesReducer,
  userReducer,
  planReducer,
  contactsReducer,
  callsReducer,
  messagesReducer,
  historyReducer,
  appsReducer,
  youtubeReducer,
  galleryReducer,
  locationReducer,
  whatsappReducer,
  instagramReducer,
  tinderReducer,
  notificationReducer,
});

export default appReducer;
