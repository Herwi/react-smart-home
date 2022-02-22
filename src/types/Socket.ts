import SmartDeviceDetails from "./SmartDeviceDetails";

export interface ServerToClientEvents {
    message: (message: string) => void;
}

export interface ClientToServerEvents {
    
}