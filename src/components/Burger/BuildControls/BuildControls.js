import React from 'react';
import classes from './BuildControls.css'
import BuildControl from "./BuildControl/BuildControl";

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Meat', type: 'meat'},
    {label: 'Cheese', type: 'cheese'},
];

const BuildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            {controls.map(ctrl => {
                return <BuildControl
                            key={ctrl.label}
                            label={ctrl.label}
                            added={() => props.ingAdded(ctrl.type)}
                            deleted={() => props.ingDel(ctrl.type)} />
            })}
        </div>
    );
};

export default BuildControls;