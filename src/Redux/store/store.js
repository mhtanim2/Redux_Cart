import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "../Slice/cartSlice";
import productReducer from "../Slice/productSlice";
import cardReducer from "../Slice/slice";
export default configureStore({
  reducer: {
    card: cardReducer,
    cart: cartReducer,
    product:productReducer,
  },
});
