import { configureStore } from "@reduxjs/toolkit";
import charactersReducer from "./charactersSlice";
import widgetStatusReducer from "./widgetStatusSlice ";
import paginationReducer from "./paginationSlice"

export default configureStore({
  reducer: {
    characters: charactersReducer,
    widgetStatus: widgetStatusReducer,
    pagination: paginationReducer
  },
});
