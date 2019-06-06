import React, {Component} from 'react';

import Aux from '../../hoc/Auxiliary';
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const ING_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

class BurgerBuilder extends Component {
    state = {
      ingredients: {
          salad: 0,
          bacon: 0,
          cheese: 0,
          meat: 0
      },
        totalPrice: 4,
        purchasable: false,
        showModal: false
    };

    showModal = () => {
      this.setState({
          showModal: true
      })
    };

    closeModal = () => {
        this.setState({
            showModal: false
        })
    };

    purchaseContinueHandler = () => {
        alert('You continue!');
    };

    updatePurchaseState = (ingreds) => {
        let ingredCount = 0;

        for (let key in ingreds) {
            ingredCount += ingreds[key];
        }
        this.setState({
            purchasable: ingredCount > 0
        })
    };

    addIngrHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIng = {
            ...this.state.ingredients
        };
        updatedIng[type] = updatedCount;

        const priceAddition = ING_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIng
        });

        this.updatePurchaseState(updatedIng);
    };

    removeIngrHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount > 0) {
            const updatedCount = oldCount - 1;
            const updatedIng = {
                ...this.state.ingredients
            };
            updatedIng[type] = updatedCount;

            const priceDeduction = ING_PRICES[type];
            const oldPrice = this.state.totalPrice;
            const newPrice = oldPrice - priceDeduction;

            this.setState({
                totalPrice: newPrice,
                ingredients: updatedIng
            });

            this.updatePurchaseState(updatedIng);
        }
    };

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return (
            <Aux>
                <Modal show={this.state.showModal} modalClosed={this.closeModal}>
                    <OrderSummary
                        ingredients={this.state.ingredients}
                        total={this.state.totalPrice}
                        cancel={this.closeModal}
                        continue={this.purchaseContinueHandler}
                    />
                </Modal>
                <Burger
                    ingredients={this.state.ingredients}/>
                <BuildControls
                    ingAdded={this.addIngrHandler}
                    ingDel={this.removeIngrHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    showModal={this.showModal}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;