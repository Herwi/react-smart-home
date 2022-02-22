import ISmartDeviceDetails from "./ISmartDeviceDetails";

export default class ISmartOutlet extends ISmartDeviceDetails {
    isTurnedOn: boolean;
    powerConsumption: number;

    constructor(
        id: string,
        name: string,
        connectionState: string,
        isTurnedOn: boolean,
        powerConsumption: number
    ) {
        super("outlet", id, name, connectionState);
        this.isTurnedOn = isTurnedOn;
        this.powerConsumption = powerConsumption;
    }
}