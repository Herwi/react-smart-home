import React from 'react';
import ISmartTemperatureSensor from '../../types/ISmartTemperatureSensor';

const SmartTemperatureSensorDetails: React.FC<{ device: ISmartTemperatureSensor }> = ({ device }) => {
    return (
        <>
            {device.name}
        </>
    );
};

export default SmartTemperatureSensorDetails;