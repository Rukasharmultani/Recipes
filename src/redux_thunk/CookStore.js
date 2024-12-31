import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from "../redux_thunk/CookReducer";

const store = configureStore({
  reducer: {
    recipes: recipeReducer,
  },
});

export default store;
 