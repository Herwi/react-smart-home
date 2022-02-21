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

export default {
    devicesLoadStart,
    devicesLoadSuccess,
    devicesLoadError,
    deviceDetailsLoadStart,
    deviceDetailsLoadSuccess,
    deviceDetailsLoadError
};