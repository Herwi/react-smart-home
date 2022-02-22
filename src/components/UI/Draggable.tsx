import React from 'react';
import interact from 'interactjs';
import classes from './Draggable.module.css';

const Draggable: React.FC = ({ children }) => {
    const dragMoveListener = (event: any) => {
        var target = event.target
        // keep the dragged position in the data-x/data-y attributes
        var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
        var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

        // translate the element
        target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'

        // update the posiion attributes
        target.setAttribute('data-x', x)
        target.setAttribute('data-y', y)
    }
    interact(`.${classes.draggable}`)
        .draggable({
            // enable inertial throwing
            inertia: true,
            // keep the element within the area of it's parent
            modifiers: [
                interact.modifiers.restrictRect({
                    restriction: 'parent',
                    endOnly: true
                })
            ],
            // enable autoScroll
            autoScroll: false,

            listeners: {
                // call this function on every dragmove event
                move: dragMoveListener
            }
        })
    return (
        <div className={classes.outer}>
            <div className={classes.parent}>
                <div className={classes.draggable}>{children}</div>
            </div>
        </div>
    );
};

export default Draggable;