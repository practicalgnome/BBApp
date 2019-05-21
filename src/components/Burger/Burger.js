import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = props => {
    let transfIng = Object.keys(props.ingredients)
        .map(ing => {
            return [...Array(props.ingredients[ing])].map((_, i) => {
                return <BurgerIngredient key={ing+i} type={ing} />
            });
        }).reduce((acc, el) => {
            return acc.concat(el);
        }, []);

    if (transfIng.length === 0) {
        transfIng = <p>Please start adding ingredients</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {/*{transfIng.length ? transfIng : <p>Please start adding ingredients</p>}*/}
            {transfIng}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default Burger;