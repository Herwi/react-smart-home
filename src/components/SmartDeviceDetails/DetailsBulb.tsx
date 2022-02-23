import React from 'react';
import ISmartBulb from '../../types/ISmartBulb';
import classes from './Details.module.css';

const SmartBulbDetails: React.FC<{ device: ISmartBulb }> = ({ device }) => {
    return (
        <>
            Brightness: {device.brightness}<br />
            Color: {device.color}
            State: {device.isTurnedOn ? "On" : "Off"}
        </>
    );
};

export default SmartBulbDetails;