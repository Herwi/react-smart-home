import ISmartDeviceDetails from "./ISmartDeviceDetails";
import ISmartDeviceType from "./ISmartDeviceType";
import IConnectionState from "./IConnectionState";

export default class ISmartOutlet extends ISmartDeviceDetails {
  isTurnedOn: boolean;
  powerConsumption: number;

  constructor(
    id: string,
    name: string,
    connectionState: IConnectionState,
    isTurnedOn: boolean,
    powerConsumption: number
  ) {
    super(ISmartDeviceType.outlet, id, name, connectionState);
    this.isTurnedOn = isTurnedOn;
    this.powerConsumption = powerConsumption;
  }
}
