import { combineReducers } from "redux";
import productsReducer from "./products/productsReducer";

export default function rootReducer() {
  return combineReducers({ productsState: productsReducer });
}
