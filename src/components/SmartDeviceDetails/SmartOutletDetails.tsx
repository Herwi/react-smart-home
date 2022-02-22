import React from 'react';
import ISmartOutlet from '../../types/ISmartOutlet';

const SmartOutletDetails: React.FC<{ device: ISmartOutlet }> = ({ device }) => {
    return (
        <>
            {device.name}
        </>
    );
};

export default SmartOutletDetails;