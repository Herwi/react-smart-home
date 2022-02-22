import DeviceService from '../../../services/devices.service';
import actions from './devices.actions';
import IAction from '../../../types/IAction';
import SmartDevice from '../../../types/SmartDevice';
import SmartDeviceDetails from '../../../types/SmartDeviceDetails';

type DispatchFunction = (action: IAction<SmartDevice[] | SmartDeviceDetails | string | void>) => void;

export const loadDevicesAsync = () => (dispatch: DispatchFunction) => {
    dispatch(actions.devicesLoadStart());

    DeviceService.getAllDevices()
        .then((response) => dispatch(
            actions.devicesLoadSuccess(response.data as SmartDevice[])
        ))
        .catch((error) => dispatch(actions.devicesLoadError(error.message)));
}

export const loadDeviceDetailsAsync = (id: string) => (dispatch: DispatchFunction) => {
    dispatch(actions.deviceDetailsLoadStart());

    DeviceService.getDeviceDetails(id)
        .then((response) => dispatch(
            actions.deviceDetailsLoadSuccess(response.data as SmartDeviceDetails)
        ))
        .catch((error) => dispatch(actions.deviceDetailsLoadError(error.message)));
}

export const connectDevicesRefresher = () => (dispatch: DispatchFunction) => {
    dispatch(actions.devicesRefresherConnect());

    try {
        DeviceService.connectDevicesRefresher((socket) => {
            socket.on("message", (message: string) => {
                const deviceDetails: SmartDeviceDetails = JSON.parse(message);
                dispatch(actions.devicesRefresherUpdate(deviceDetails));
            });
        });
    } catch(error: any) {
        dispatch(actions.devicesRefresherError(error.message));
    }
}