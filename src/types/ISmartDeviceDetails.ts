import ISmartDeviceType from "./ISmartDeviceType";
import IConnectionState from "./IConnectionState";

export default abstract class ISmartDeviceDetails {
  type: ISmartDeviceType;
  id: string;
  name: string;
  connectionState: IConnectionState;

  constructor(
    type: ISmartDeviceType,
    id: string,
    name: string,
    connectionState: IConnectionState
  ) {
    this.type = type;
    this.id = id;
    this.name = name;
    this.connectionState = connectionState;
  }
}
