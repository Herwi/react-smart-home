import ISmartDeviceDetails from "./ISmartDeviceDetails";
import ISmartDeviceType from "./ISmartDeviceType";
import IConnectionState from "./IConnectionState";

export default class ISmartTemperatureSensor extends ISmartDeviceDetails {
  temperature: number; // in Celsius

  constructor(
    id: string,
    name: string,
    connectionState: IConnectionState,
    temperature: number
  ) {
    super(ISmartDeviceType.temperatureSensor, id, name, connectionState);
    this.temperature = temperature;
  }
}
