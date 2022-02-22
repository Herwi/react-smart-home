import ISmartDeviceDetails from "./ISmartDeviceDetails";

export default class ISmartTemperatureSensor extends ISmartDeviceDetails {
    temperature: number; // in Celsius

    constructor(
        id: string,
        name: string,
        connectionState: string,
        temperature: number
    ) {
        super("temperatureSensor", id, name, connectionState);
        this.temperature = temperature;
    }
}