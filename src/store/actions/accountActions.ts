
import { Dispatch } from "redux";
import { SET_ACCOUNT, SET_ACTIVE_DEVICE } from "../actionTypes";

interface SetAccountAction {
  type: typeof SET_ACCOUNT;
  payload: IAccount | null;
}
interface SetActiveDeviceAction {
  type: typeof SET_ACTIVE_DEVICE;
  payload?: IDevice ;
}

export const SetAccount = (account: IAccount | null) => async (
  dispatch: Dispatch<SetAccountAction>
) => {
  dispatch({
    type: SET_ACCOUNT,
    payload: account,
  });
};

export const SetActiveDevice = (device: IDevice) => async (
  dispatch: Dispatch<SetActiveDeviceAction>
) => {
  dispatch({
    type: SET_ACTIVE_DEVICE,
    payload: device,
  });
};

export type AccountActionTypes = SetAccountAction| SetActiveDeviceAction;
