import { ADD_INGREDIENT, REMOVE_INGREDIENT } from "../../../app/store/actionTypes";
import { INGREDIENT_PRICES } from "../../../app/constants";

export const onAddIngredient = (label) => {
  return {
    type: ADD_INGREDIENT,
    payload: {
      label,
      price: INGREDIENT_PRICES[label]
    }
  };
};

export const onRemoveIngredient = (label) => {
  return {
    type: REMOVE_INGREDIENT,
    payload: {
      label,
      price: INGREDIENT_PRICES[label]
    }
  };
};