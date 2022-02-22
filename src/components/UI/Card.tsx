import React from 'react';
import classes from './Card.module.css';

const Card: React.FC<{small?: boolean}> = ({children, small}) => {
    let className = classes.card;
    if(small) className += ` ${classes.small}`;
    return <div className={className}>{children}</div>
}

export default Card;