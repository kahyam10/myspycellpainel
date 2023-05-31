
import { Dispatch } from "redux";
import { SET_DEVICE, SET_DEVICES } from "../actionTypes";

interface SetDeviceAction {
  type: typeof SET_DEVICES;
  payload: IDevice[];
}
interface SetOneDeviceAction {
  type: typeof SET_DEVICE;
  payload: IDevice;
}



export const SetDevices = (devices: IDevice[]) => async (
    dispatch: Dispatch<SetDeviceAction>
  ) => {
    try {
      dispatch({
        type: SET_DEVICES,
        payload:devices,
      });
    } catch (error) {}
  };
export const SetDevice = (device: IDevice) => async (
    dispatch: Dispatch<SetOneDeviceAction>
  ) => {
    try {
      dispatch({
        type: SET_DEVICE,
        payload:device,
      });
    } catch (error) {}
  };

  export type DeviceActionTypes = SetDeviceAction | SetOneDeviceAction;