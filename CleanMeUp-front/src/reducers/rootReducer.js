import { combineReducers } from "redux";
import exampleReducer from "./exampleReducer";
import orderReducer from "./orderReducer"

export default combineReducers({
  exampleReducer,
  orderReducer
});
