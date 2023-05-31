import { DeviceActionTypes } from "../actions/deviceAction";
import * as actionTypes from "../actionTypes";
import { devicesInitialState } from "../initialStates/devicesInitialState";

const devicesReducer = (
  state: DeviceState = devicesInitialState,
  action: DeviceActionTypes
): DeviceState => {
  switch (action.type) {
    case actionTypes.SET_DEVICES:
      const devices: IDevice[] = action.payload;
      return {
        ...state,
        state: devices,
      };
    case actionTypes.SET_DEVICE:
      const device: IDevice = action.payload;
      return {
        ...state,
        state: state.state.map((dev: IDevice) =>
          dev.reg_id === device.reg_id ? (dev = device) : dev
        ),
      };
    default:
      return state;
  }
};

export default devicesReducer;
