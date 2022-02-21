export default interface SmartDevice {
    type: string;
    id: string;
    name: string;
    connectionState: string; // 'connected', 'disconnected' or 'poorConnection'
}