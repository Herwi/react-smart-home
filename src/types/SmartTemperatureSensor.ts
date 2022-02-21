import SmartDeviceDetails from "./SmartDeviceDetails";

export default class SmartTemperatureSensor extends SmartDeviceDetails {
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