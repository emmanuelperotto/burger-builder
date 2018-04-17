import { REMOVE_INGREDIENT, ADD_INGREDIENT } from "../../app/store/actionTypes";

export const removeIngredients = (ingredients, label) => {
  const newIngredients = [...ingredients];
  const index = newIngredients.lastIndexOf(label);

  if (index !== -1) {
    newIngredients.splice(index, 1);
  }

  return newIngredients;
};

export const calculateTotalPrice = (state, payload, actionType) => {
  let totalValue = state.totalPrice;

  switch (actionType) {
    case ADD_INGREDIENT:
      totalValue += payload.price;
      break;
    case REMOVE_INGREDIENT:
      if (state.ingredients.indexOf(payload.label) !== -1) {
        totalValue -= payload.price;
      }
      break;
    default:
      break;
  }

  return totalValue;
};
