import ISmartDeviceType from "./ISmartDeviceType";
import IConnectionState from "./IConnectionState";

export default interface ISmartDevice {
  type: ISmartDeviceType;
  id: string;
  name: string;
  connectionState: IConnectionState;
}
