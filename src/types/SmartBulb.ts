import SmartDeviceDetails from "./SmartDeviceDetails";

export default class SmartBulb extends SmartDeviceDetails {
    isTurnedOn: boolean;
    brightness: number; // <0, 100>
    color: string; // in the CSS formats

    constructor(
        id: string,
        name: string,
        connectionState: string,
        isTurnedOn: boolean,
        brightness: number,
        color: string
    ) {
        super("bulb", id, name, connectionState);
        this.isTurnedOn = isTurnedOn;
        this.brightness = brightness;
        this.color = color;
    }
}