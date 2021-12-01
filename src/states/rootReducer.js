import { combineReducers } from "redux";
import { cartReducer } from "./cart/cartReducer";
import productsReducer from "./products/productsReducer";

export default function rootReducer() {
  return combineReducers({
    productsState: productsReducer,
    cartState: cartReducer,
  });
}
