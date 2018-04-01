import { ADD_INGREDIENT, REMOVE_INGREDIENT } from "../../app/store/actionTypes";
import { removeIngredients } from "./BurgerBuilderHelper";

const initialState = {
  ingredients: [],
  totalPrice: 0
};

const burgerBuilderReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case ADD_INGREDIENT:
      return {
        ...state,
        ingredients: state.ingredients.concat(payload.label),
        totalPrice: state.totalPrice + payload.price
      };
    case REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: removeIngredients(state.ingredients, payload.label),
        totalPrice: state.totalPrice - payload.price
      };
    default:
      return state;
  }
};

export default burgerBuilderReducer;