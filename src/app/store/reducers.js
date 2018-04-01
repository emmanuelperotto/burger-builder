import { combineReducers } from "redux";
import burgerBuilderReducer from "../../burger/burger-builder/BurgerBuilderReducer";

const rootReducer = combineReducers({
  burgerBuilder: burgerBuilderReducer
});

export default rootReducer;