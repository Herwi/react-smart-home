import IAction from '../../../types/IAction';
import SmartDevice from '../../../types/SmartDevice';
import SmartDeviceDetails from '../../../types/SmartDeviceDetails';
import actionTypes from './devices.actionTypes';

const devicesLoadStart = (): IAction<void> => {
    return {
        type: actionTypes.DEVICES_LOAD_START
    };
};

const devicesLoadSuccess = (devices: SmartDevice[]): IAction<SmartDevice[]> => {
    return {
        type: actionTypes.DEVICES_LOAD_SUCCESS,
        payload: devices
    };
};

const devicesLoadError = (errorMessage: string): IAction<string> => {
    return {
        type: actionTypes.DEVICES_LOAD_ERROR,
        payload: errorMessage
    };
};

const deviceDetailsLoadStart = (): IAction<void> => {
    return {
        type: actionTypes.DEVICE_DETAILS_LOAD_START
    };
};

const deviceDetailsLoadSuccess = (device: SmartDeviceDetails): IAction<SmartDeviceDetails> => {
    return {
        type: actionTypes.DEVICE_DETAILS_LOAD_SUCCESS,
        payload: device
    };
};

const deviceDetailsLoadError = (errorMessage: string): IAction<string> => {
    return {
        type: actionTypes.DEVICE_DETAILS_LOAD_ERROR,
        payload: errorMessage
    };
};

const devicesRefresherConnect = (): IAction<void> => {
    return {
        type: actionTypes.DEVICES_REFRESHER_CONNECT
    };
};

const devicesRefresherUpdate = (device: SmartDeviceDetails): IAction<SmartDeviceDetails> => {
    return {
        type: actionTypes.DEVICES_REFRESHER_UPDATE,
        payload: device
    };
};

const devicesRefresherError = (errorMessage: string): IAction<string> => {
    return {
        type: actionTypes.DEVICES_REFRESHER_ERROR,
        payload: errorMessage
    };
};
const actions = {
    devicesLoadStart,
    devicesLoadSuccess,
    devicesLoadError,
    deviceDetailsLoadStart,
    deviceDetailsLoadSuccess,
    deviceDetailsLoadError,
    devicesRefresherConnect,
    devicesRefresherUpdate,
    devicesRefresherError
};
export default actions;