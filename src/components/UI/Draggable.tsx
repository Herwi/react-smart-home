import React from 'react';
import interact from 'interactjs';
import classes from './Draggable.module.css';
import { MdOutlineNorthWest } from 'react-icons/md';

const Draggable: React.FC<{ resizable?: boolean, beforeHide?: boolean }> = ({ children, resizable, beforeHide }) => {
    // event triggered on moving item with interactjs
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
    // initialisation ofdraggable from interactjs
    const item = interact(`.${classes.draggable}`)
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
    let handle: any | null = null;
    if (resizable) {
        // turning on resizability
        handle = <div className={classes.resizeHandle}><MdOutlineNorthWest /></div>
        item.resizable({
            preserveAspectRatio: false,
            edges: { left: false, right: true, bottom: true, top: false },
            modifiers: [
                interact.modifiers.restrictSize({
                    min: { width: 300, height: 200 }
                })
            ]
        })
            .on('resizemove', function (event) {
                var target = event.target,
                    x = (parseFloat(target.getAttribute('data-x')) || 0),
                    y = (parseFloat(target.getAttribute('data-y')) || 0);

                // update the element's style
                target.style.width = event.rect.width + 'px';
                target.style.height = event.rect.height + 'px';

                // translate when resizing from top or left edges
                x += event.deltaRect.left;
                y += event.deltaRect.top;

                target.style.webkitTransform = target.style.transform =
                    'translate(' + x + 'px,' + y + 'px)';

                target.setAttribute('data-x', x);
                target.setAttribute('data-y', y);
            });
    }
    // before hide class for fade out animation
    const hide = beforeHide ? classes.beforeHide : '';
    return (
        <div className={classes.outer}>
            <div className={classes.parent}>
                <div className={`${classes.draggable} ${hide}`}>{children}{handle}</div>
            </div>
        </div>
    );
};

export default Draggable;