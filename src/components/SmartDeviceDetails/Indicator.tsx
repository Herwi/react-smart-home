import React, { ReactElement } from 'react';
import classes from './Indicator.module.css';

const Indicator: React.FC<{ icon: ReactElement, opacity?: boolean }> = ({ icon, opacity }) => {
    const opc = opacity ? classes.opacity : '';
    return (
        <div className={classes.indicator}>
            <div className={`${classes.icon} ${opc}`}>{icon}</div>
        </div>
    );
};

export default Indicator;