import React, { ReactElement } from 'react';
import ISmartDeviceDetails from '../../types/ISmartDeviceDetails';
import {
    MdSignalWifi4Bar,
    MdSignalWifiStatusbarConnectedNoInternet2,
    MdSignalWifiConnectedNoInternet0,
    MdLightbulb,
    MdElectricalServices,
    MdDeviceThermostat
} from 'react-icons/md';
import Indicator from './Indicator';
import classes from './Indicators.module.css';

const Indicators: React.FC<{ device: ISmartDeviceDetails }> = ({ device }) => {
    const indicators: { icon: ReactElement, opacity?: boolean }[] = [];

    if (device.type === 'bulb') {
        indicators.push({
            icon: <MdLightbulb />
        });
    }
    else if (device.type === 'outlet') {
        indicators.push({
            icon: <MdElectricalServices />
        });
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
