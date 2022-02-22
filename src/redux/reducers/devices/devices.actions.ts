import IAction from '../../../types/IAction';
import ISmartDevice from '../../../types/ISmartDevice';
import ISmartDeviceDetails from '../../../types/ISmartDeviceDetails';
import actionTypes from './devices.actionTypes';

const devicesLoadStart = (): IAction<void> => {
    return {
        type: actionTypes.DEVICES_LOAD_START
    };
};

const devicesLoadSuccess = (devices: ISmartDevice[]): IAction<ISmartDevice[]> => {
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

const deviceDetailsLoadSuccess = (device: ISmartDeviceDetails): IAction<ISmartDeviceDetails> => {
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

const devicesRefresherUpdate = (device: ISmartDeviceDetails): IAction<ISmartDeviceDetails> => {
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