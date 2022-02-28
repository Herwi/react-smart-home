import apiClient from "../helpers/apiClient";
import socketClient from "../helpers/socketClient";
import { Socket } from "socket.io-client";
import { ServerToClientEvents, ClientToServerEvents } from "../types/Socket";

class DevicesService {
  getAllDevices = () => apiClient().get("devices");
  getDeviceDetails = (id: string) => apiClient().get(`device/${id}`);
  connectDevicesRefresher = (
    callback: (io: Socket<ServerToClientEvents, ClientToServerEvents>) => void
  ) => {
    callback(socketClient());
  };
}

export default new DevicesService();
