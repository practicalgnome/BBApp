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
            <p>Current price: <strong>{props.price.toFixed(2)}</strong> $</p>
            {controls.map(ctrl => {
                return <BuildControl
                            key={ctrl.label}
                            label={ctrl.label}
                            added={() => props.ingAdded(ctrl.type)}
                            deleted={() => props.ingDel(ctrl.type)}
                            disabled={props.disabled[ctrl.type]}/>
            })}
            <button className={classes.OrderButton} disabled={!props.purchasable} onClick={props.showModal}>ORDER NOW</button>
            {/*<button className={classes.OrderButton} disabled={props.price === 4}>ORDER NOW</button>*/}
        </div>
    );
};

export default BuildControls;