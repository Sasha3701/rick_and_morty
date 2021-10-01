import { configureStore } from "@reduxjs/toolkit";
import charactersReducer from "./charactersSlice";
import widgetStatusReducer from "./widgetStatusSlice ";

export default configureStore({
  reducer: {
    characters: charactersReducer,
    widgetStatus: widgetStatusReducer,
  },
});
