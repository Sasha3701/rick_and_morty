import { createSlice } from "@reduxjs/toolkit";

export const widgetStatusSlice = createSlice({
  name: "widgetStatus",
  initialState: {
    value: false,
  },
  reducers: {
    change: (state) => {
      state.value = !state.value;
    }
  },
});

export const { change } = widgetStatusSlice.actions;

export default widgetStatusSlice.reducer;
