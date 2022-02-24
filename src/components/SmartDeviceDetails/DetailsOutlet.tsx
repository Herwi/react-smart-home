import React from 'react';
import ISmartOutlet from '../../types/ISmartOutlet';
import classes from './Details.module.css';

const SmartOutletDetails: React.FC<{ device: ISmartOutlet }> = ({ device }) => {
    return (
        <>
            <div className={classes.power}>
                <div className={classes.inner}>
                    <div className={classes.label}>Consumption</div>
                    <div className={classes.tile}>
                        <div className={classes.value}>{device.powerConsumption}W</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SmartOutletDetails;