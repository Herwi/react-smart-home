import { io, Socket } from 'socket.io-client';
import { ServerToClientEvents, ClientToServerEvents } from '../types/Socket';

const apiURL = 'http://localhost:3400/api/v1/refresh';
export let socketInstance: Socket<ServerToClientEvents, ClientToServerEvents> | void = undefined;

const socketClient = (): Socket<ServerToClientEvents, ClientToServerEvents> => {
    socketInstance = io(apiURL);
    return socketInstance;
}

export default socketClient;