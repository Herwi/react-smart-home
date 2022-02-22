import React from 'react';
import ISmartBulb from '../../types/ISmartBulb';

const SmartBulbDetails: React.FC<{ device: ISmartBulb }> = ({ device }) => {
    return (
        <>
            {device.name} - {device.brightness}
        </>
    );
};

export default SmartBulbDetails;