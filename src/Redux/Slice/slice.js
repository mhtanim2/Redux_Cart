import { createSlice } from "@reduxjs/toolkit";

export const cardSlice = createSlice({
  name: "card",
  initialState: {
    value: [],
  },

  reducers: {
    addTodo: (state, action) => {
      state.value.push(action.payload);
      //  debugger;
    }
  },
});
export default cardSlice.reducer;
export const { addTodo } = cardSlice.actions;
