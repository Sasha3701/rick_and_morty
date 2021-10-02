import { createSlice } from "@reduxjs/toolkit";

export const paginationSlice = createSlice({
  name: "pagination",
  initialState: {
    currentPage: null,
    pages: null,
    next: null,
    prev: null,
    queryString: ""
  },
  reducers: {
    save: (state, action) => {
      const { pages, next, prev } = action.payload
      state.currentPage = 1
      state.pages = pages;
      state.next = !!next;
      state.prev = !!prev
    },

    change: (state, action) => {
      const { pages, next, prev, currentPage } = action.payload
      state.currentPage = currentPage
      state.pages = pages;
      state.next = !!next;
      state.prev = !!prev
    },

    addQueryString: (state, action) => {
      state.queryString = action.payload
    }
  },
});

export const { save, change, addQueryString } = paginationSlice.actions;

export default paginationSlice.reducer;
