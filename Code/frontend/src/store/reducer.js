import { combineReducers } from "redux";
import { api } from "./middleware/api";
import { cartReducer } from "./cart";
export default combineReducers({
  [api.reducerPath]: api.reducer,
  cart: cartReducer,
});
