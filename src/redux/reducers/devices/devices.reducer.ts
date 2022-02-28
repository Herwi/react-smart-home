import IAction from "../../../types/IAction";
import ISmartDevice from "../../../types/ISmartDevice";
import ISmartDeviceDetails from "../../../types/ISmartDeviceDetails";
import actionTypes from "./devices.actionTypes";
import initialState from "./devices.initialState";
import IDevicesReducerState from "../../../types/IDevicesReducerState";

const devicesReducer = (
  state: IDevicesReducerState = initialState,
  { type, payload }: IAction<ISmartDevice[] | ISmartDeviceDetails | string>
): IDevicesReducerState => {
  switch (type) {
    case actionTypes.DEVICES_LOAD_START:
      return {
        ...state,
        isLoadingDevices: true,
        devices: [],
        devicesErrorMessage: null,
      };
    case actionTypes.DEVICES_LOAD_SUCCESS:
      return {
        ...state,
        isLoadingDevices: false,
        devices: payload as ISmartDevice[],
      };
    case actionTypes.DEVICES_LOAD_ERROR:
      return {
        ...state,
        isLoadingDevices: false,
        devicesErrorMessage: payload as string,
      };
    case actionTypes.DEVICE_DETAILS_LOAD_START:
      return {
        ...state,
        isLoadingDeviceDetails: true,
        deviceDetailsErrorMessage: null,
      };
    case actionTypes.DEVICE_DETAILS_LOAD_SUCCESS:
      return {
        ...state,
        isLoadingDeviceDetails: false,
        deviceDetails: payload as ISmartDeviceDetails,
      };
    case actionTypes.DEVICE_DETAILS_LOAD_ERROR:
      return {
        ...state,
        isLoadingDeviceDetails: false,
        deviceDetails: null,
        deviceDetailsErrorMessage: payload as string,
      };
    case actionTypes.DEVICE_DETAILS_UNLOAD_START:
      return {
        ...state,
        isUnloadingDeviceDetails: true,
      };
    case actionTypes.DEVICE_DETAILS_UNLOAD_SUCCESS:
      return {
        ...state,
        deviceDetails: null,
        isUnloadingDeviceDetails: false,
      };
    case actionTypes.DEVICES_REFRESHER_UPDATE:
      let deviceDetails: ISmartDeviceDetails | null =
        payload as ISmartDeviceDetails;
      const index = state.devices.findIndex((device: ISmartDevice) => {
        return deviceDetails != null && device.id === deviceDetails.id;
      });
      const { type, id, name, connectionState }: ISmartDeviceDetails =
        deviceDetails;
      if (
        state.deviceDetails == null ||
        deviceDetails.id !== state.deviceDetails.id
      ) {
        deviceDetails = state.deviceDetails;
      }
      if (index > -1) {
        return {
          ...state,
          devices: [
            ...state.devices.slice(0, index),
            {
              type,
              id,
              name,
              connectionState,
            },
            ...state.devices.slice(index + 1),
          ],
          deviceDetails,
        };
      }
      return state;
    default:
      return state;
  }
};

export default devicesReducer;
