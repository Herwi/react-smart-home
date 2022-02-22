import React, { ReactElement } from 'react';
import ISmartDevice from '../../types/ISmartDevice';
import classes from './SmartDevice.module.css';
import { MdLightbulb, MdElectricalServices, MdDeviceThermostat } from 'react-icons/md';

const SmartDevice: React.FC<{ device: ISmartDevice }> = ({ device }) => {
    let color: string;
    let icon: ReactElement;
    switch (device.connectionState) {
        case 'connected':
            color = classes.connected;
            break;
        case 'poorConnection':
            color = classes.poorConnection;
            break;
        default:
            color = classes.disconnected;
    }
    switch (device.type) {
        case 'bulb':
            icon = <MdLightbulb />
            break;
        case 'temperatureSensor':
            icon = <MdDeviceThermostat />
            break;
        default:
            icon = <MdElectricalServices />
    }
    return (
        <div className={classes.outer}>
            <div className={`${classes.device} ${color}`}>
                <div className={classes.icon}>{icon}</div>
                <div className={classes.name}>{device.name}</div>
            </div>
        </div>
    )
}

export default SmartDevice;