import { combineReducers } from "redux";
import exampleReducer from "./exampleReducer";
import orderReducer from "./orderReducer"
import priceListReducer from "./priceListReducer";
import serviceListReducer from "./serviceListReducer";

export default combineReducers({
  exampleReducer,
  orderReducer,
  priceListReducer,
  serviceListReducer
});
