import { configureStore } from "@reduxjs/toolkit";

import productModalSlice from "./product-modal/productModalSlice";

import cartItemsSlice from "./shopping-cart/cartItemsSlice";

import { loadingBarReducer } from "react-redux-loading-bar";

export const store = configureStore({
  reducer: {
    productModal: productModalSlice,
    cartItems: cartItemsSlice,
  },
});
