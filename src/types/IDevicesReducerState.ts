import SmartDevice from "./SmartDevice";
import SmartDeviceDetails from "./SmartDeviceDetails";

export default interface initialStateInterface {
    readonly isLoadingDevices: boolean,
    readonly devicesErrorMessage: string | null,
    readonly devices: SmartDevice[],
    readonly isLoadingDeviceDetails: boolean,
    readonly deviceDetailsErrorMessage: string | null,
    readonly deviceDetails: SmartDeviceDetails | null
}