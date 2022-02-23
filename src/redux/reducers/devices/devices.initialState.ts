import IDevicesReducerState from '../../../types/IDevicesReducerState';

const initialState: IDevicesReducerState = {
    isLoadingDevices: false,
    devicesErrorMessage: null,
    devices: [],
    isLoadingDeviceDetails: false,
    deviceDetailsErrorMessage: null,
    deviceDetails: null,
    isUnloadingDeviceDetails: false
}

export default initialState;