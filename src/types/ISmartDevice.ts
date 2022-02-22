export default interface ISmartDevice {
    type: string;
    id: string;
    name: string;
    connectionState: string; // 'connected', 'disconnected' or 'poorConnection'
}