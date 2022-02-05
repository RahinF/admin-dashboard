import { createSlice } from "@reduxjs/toolkit";

const hamburger = createSlice({
  name: "hamburger",
  initialState: {
    isOpen: false,
  },
  reducers: {
    toggle(state) {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggle } = hamburger.actions;
export default hamburger.reducer;
