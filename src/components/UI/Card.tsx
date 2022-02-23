import React from 'react';
import classes from './Card.module.css';

const Card: React.FC<{small?: boolean, center?: boolean, fixedWidth?: boolean, fill?: boolean}> = (
    {children, small, center, fixedWidth, fill}
) => {
    let className = classes.card;

    // setting max-width
    if(small) className += ` ${classes.small}`;
    // centering card by margin auto
    if(center) className += ` ${classes.center}`;
    // setting fixed width
    if(fixedWidth) className += ` ${classes.fixedWidth}`;
    // width and height setted up to 100%
    if(fill) className += ` ${classes.fill}`;
    return <div className={className}>{children}</div>
}

export default Card;