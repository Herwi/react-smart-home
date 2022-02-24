import React from 'react';
import ISmartBulb from '../../types/ISmartBulb';
import classes from './Details.module.css';

const SmartBulbDetails: React.FC<{ device: ISmartBulb }> = ({ device }) => {
    return (
        <>
            <div className={classes.brightness}>
                <div className={classes.inner}>
                    <div className={classes.value} style={{ width: `${device.brightness}%` }}></div>
                    <div className={classes.label}>
                        <div className={classes.text}>Brightness</div>
                    </div>
                </div>
            </div>
            <div className={classes.color} style={{ backgroundColor: device.color }}></div>
        </>
    );
};

export default SmartBulbDetails;