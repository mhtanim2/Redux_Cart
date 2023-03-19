import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: [],
    subTotal: 0,
    shipping: 0,
    tax: 0,
    total: 0,
  },
  reducers: {
    addToCart: (state, action) => {
        const item=action.payload;
        const isItemExist = state.value.find((i) => i.id === item.id);

      if (isItemExist) {
        state.value.forEach((i) => {
          if (i.id === item.id) i.quantity += 1;
        });
      } else {
        state.value.push(item);
      }
    },
    
    removeFromCart: (state, action) => {
      state.value.splice(action.payload, 1);
    },
    
    increment:(state,action)=>{
      const item = state.value.find((i) => i.id === action.payload.id);
        state.value.forEach((i) => {
          if (i.id === item.id) i.quantity += 1;
        });
    },

    decrement:(state,action)=>{
      const item = state.value.find((i) => i.id === action.payload.id);
      if (item.quantity > 1) {
        state.value.forEach((i) => {
          if (i.id === item.id) i.quantity -= 1;
        });
      }
    },

    calculatePrice:(state)=>{
      let sum=0;
      state.value.forEach((i) => (sum += i.price * i.quantity));
      state.subTotal = sum;
      state.shipping = state.subTotal > 1000 ? 0 : 200;
      state.tax = +(state.subTotal * 0.18).toFixed();
      state.total = state.subTotal + state.tax + state.shipping;
    }


  },
});

export const { calculatePrice,addToCart, removeFromCart,increment,decrement } = cartSlice.actions;
export default cartSlice.reducer;
