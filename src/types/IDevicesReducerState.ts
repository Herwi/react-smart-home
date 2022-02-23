import ISmartDevice from "./ISmartDevice";
import ISmartDeviceDetails from "./ISmartDeviceDetails";

export default interface initialStateInterface {
    readonly isLoadingDevices: boolean,
    readonly devicesErrorMessage: string | null,
    readonly devices: ISmartDevice[],
    readonly isLoadingDeviceDetails: boolean,
    readonly deviceDetailsErrorMessage: string | null,
    readonly deviceDetails: ISmartDeviceDetails | null,
    readonly isUnloadingDeviceDetails: boolean
}