export default abstract class SmartDeviceDetails {
    type: string;
    id: string;
    name: string;
    connectionState: string; // 'connected', 'disconnected' or 'poorConnection'

    constructor(type: string, id: string, name: string, connectionState: string) {
        this.type = type;
        this.id = id;
        this.name = name;
        this.connectionState = connectionState;
    }
}