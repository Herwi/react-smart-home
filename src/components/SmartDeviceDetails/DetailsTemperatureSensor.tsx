import React from 'react';
import ISmartTemperatureSensor from '../../types/ISmartTemperatureSensor';
import classes from './Details.module.css';

const SmartTemperatureSensorDetails: React.FC<{ device: ISmartTemperatureSensor }> = ({ device }) => {
    return (
        <>
            <div className={classes.temperature}>
                <div className={classes.inner}>
                    <div className={classes.label}>Temperature</div>
                    <div className={classes.tile}>
                        <div className={classes.value}>{device.temperature}°C</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SmartTemperatureSensorDetails;