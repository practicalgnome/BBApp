import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = props => {
    const transfIng = Object.keys(props.ingredients)
        .map(ing => {
            return [...Array(props.ingredients[ing])].map((_, i) => {
                return <BurgerIngredient key={ing+i} type={ing} />
            });
        });

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transfIng}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default Burger;