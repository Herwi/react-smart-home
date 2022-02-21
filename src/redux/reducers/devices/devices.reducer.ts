import IAction from '../../../types/IAction';
import SmartDevice from '../../../types/SmartDevice';
import SmartDeviceDetails from '../../../types/SmartDeviceDetails';
import actionTypes from './devices.actionTypes';
import initialState from './devices.initialState';
import IDevicesReducerState from '../../../types/IDevicesReducerState';

const devicesReducer = (
    state: IDevicesReducerState = initialState,
    { type, payload }: IAction<SmartDevice[] | SmartDeviceDetails | string>
): IDevicesReducerState => {
    switch (type) {
        case actionTypes.DEVICES_LOAD_START:
            return {
                ...state,
                isLoadingDevices: true,
                devices: [],
                devicesErrorMessage: null
            }
        case actionTypes.DEVICES_LOAD_SUCCESS:
            return {
                ...state,
                isLoadingDevices: false,
                devices: payload as SmartDevice[]
            }
        case actionTypes.DEVICES_LOAD_ERROR:
            return {
                ...state,
                isLoadingDevices: false,
                devicesErrorMessage: payload as string
            }
        case actionTypes.DEVICE_DETAILS_LOAD_START:
            return {
                ...state,
                isLoadingDeviceDetails: true,
                deviceDetails: null,
                deviceDetailsErrorMessage: null
            }
        case actionTypes.DEVICE_DETAILS_LOAD_SUCCESS:
            return {
                ...state,
                isLoadingDeviceDetails: false,
                deviceDetails: payload as SmartDeviceDetails
            }
        case actionTypes.DEVICE_DETAILS_LOAD_ERROR:
            return {
                ...state,
                isLoadingDeviceDetails: false,
                deviceDetailsErrorMessage: payload as string
            }
        default:
            return state;
    }
};

export default devicesReducer;