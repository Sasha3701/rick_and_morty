import { createSlice } from "@reduxjs/toolkit";

export const charactersSlice = createSlice({
  name: "characters",
  initialState: {
    value: [],
  },
  reducers: {
    save: (state, action) => {
      state.value = action.payload;
    }
  },
});

export const { save } = charactersSlice.actions;

export default charactersSlice.reducer;
