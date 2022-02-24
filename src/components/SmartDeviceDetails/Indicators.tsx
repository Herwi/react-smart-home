import React, { ReactElement } from 'react';
import ISmartDeviceDetails from '../../types/ISmartDeviceDetails';
import ISmartBulb from '../../types/ISmartBulb';
import ISmartOutlet from '../../types/ISmartOutlet';
import {
    MdSignalWifi4Bar,
    MdSignalWifiStatusbarConnectedNoInternet2,
    MdSignalWifiConnectedNoInternet0,
    MdLightbulb,
    MdElectricalServices,
    MdDeviceThermostat,
    MdToggleOff,
    MdToggleOn
} from 'react-icons/md';
import Indicator from './Indicator';
import classes from './Indicators.module.css';

const Indicators: React.FC<{ device: ISmartDeviceDetails }> = ({ device }) => {
    interface indicator { icon: ReactElement, opacity?: boolean }
    const indicators: indicator[] = [];

    const generateStateIndicator: (device: ISmartBulb | ISmartOutlet) => indicator = (device) => {
        if (device.isTurnedOn) {
            return {
                icon: <MdToggleOn />
            }
        }
        return {
            icon: <MdToggleOff />,
            opacity: true
        }
    }

    if (device.type === 'bulb') {
        indicators.push({
            icon: <MdLightbulb />
        });
        indicators.push(generateStateIndicator(device as ISmartBulb));
    }
    else if (device.type === 'outlet') {
        indicators.push({
            icon: <MdElectricalServices />
        });
        indicators.push(generateStateIndicator(device as ISmartOutlet));
    }
    else {
        indicators.push({
            icon: <MdDeviceThermostat />
        });
    }

    if (device.connectionState === 'connected') {
        indicators.push({
            icon: <MdSignalWifi4Bar />
        });
    }
    else if (device.connectionState === 'poorConnection') {
        indicators.push({
            icon: <MdSignalWifiStatusbarConnectedNoInternet2 />
        });
    }
    else {
        indicators.push({
            icon: <MdSignalWifiConnectedNoInternet0 />,
            opacity: true
        })
    }

    return (
        <div className={classes.indicators}>
            {indicators.map(({ icon, opacity }) => <Indicator icon={icon} opacity={opacity} />)}
        </div>
    );
};

export default Indicators;
