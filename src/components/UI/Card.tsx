import React from 'react';
import classes from './Card.module.css';

const Card: React.FC<{small?: boolean, center?: boolean, fixedWidth?: boolean}> = (
    {children, small, center, fixedWidth}
) => {
    let className = classes.card;
    if(small) className += ` ${classes.small}`;
    if(center) className += ` ${classes.center}`;
    if(fixedWidth) className += ` ${classes.fixedWidth}`;
    return <div className={className}>{children}</div>
}

export default Card;