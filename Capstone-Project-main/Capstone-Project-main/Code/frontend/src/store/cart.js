// src/redux/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

let cartInLocalStorage = localStorage.getItem("cart");
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: cartInLocalStorage ? JSON.parse(cartInLocalStorage).cart : [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item._id === action.payload._id
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({
          ...action.payload,
          quantity: action.payload.quantity ? action.payload.quantity : 1,

          //writeToDatabase({"Cart_Details":payload});
        });
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item._id === action.payload);
      item.quantity++;
      localStorage.setItem("cart", JSON.stringify(state));
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item._id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
    removeItem: (state, action) => {
      const removeItem = state.cart.filter(
        (item) => item._id !== action.payload
      );
      state.cart = removeItem;
      localStorage.setItem("cart", JSON.stringify(state));
    },
    clearCart: (state) => {
      localStorage.removeItem("cart");
      state.cart.length = 0;
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { addToCart, incrementQuantity, decrementQuantity, removeItem, clearCart } =
  cartSlice.actions;
