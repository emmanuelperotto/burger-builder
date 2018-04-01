import React from 'react';
import './Burger.css';
import BurgerIngredient from './burger-ingredient/BurgerIngredient';
import PropTypes from 'prop-types';

const Burger = (props) => {
  return (
    <div className="Burger">
      <BurgerIngredient type="bread-top" />
      {props.ingredients.map((ingredient, i) => (
        <BurgerIngredient key={i} type={ingredient} />
      ))}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

Burger.propTypes = {
  ingredients: PropTypes.array
};

export default Burger;