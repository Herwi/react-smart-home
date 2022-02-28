import ISmartDeviceDetails from "./ISmartDeviceDetails";
import ISmartDeviceType from "./ISmartDeviceType";
import IConnectionState from "./IConnectionState";

export default class ISmartBulb extends ISmartDeviceDetails {
  isTurnedOn: boolean;
  brightness: number; // <0, 100>
  color: string; // in the CSS formats

  constructor(
    id: string,
    name: string,
    connectionState: IConnectionState,
    isTurnedOn: boolean,
    brightness: number,
    color: string
  ) {
    super(ISmartDeviceType.bulb, id, name, connectionState);
    this.isTurnedOn = isTurnedOn;
    this.brightness = brightness;
    this.color = color;
  }
}
