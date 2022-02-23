import React from 'react';
import ISmartOutlet from '../../types/ISmartOutlet';

const SmartOutletDetails: React.FC<{ device: ISmartOutlet }> = ({ device }) => {
    return (
        <>
            State: {(device.isTurnedOn) ? "On" : "Off"}
        </>
    );
};

export default SmartOutletDetails;