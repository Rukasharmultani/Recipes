import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  recipes: [],
  error: null,
};

const recipeSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    fetchRecipesRequest: (state) => {
      state.loading = true;
    },
    fetchRecipesSuccess: (state, action) => {
      state.loading = false;
      state.recipes = action.payload;
    },
    fetchRecipesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchRecipesRequest, fetchRecipesSuccess, fetchRecipesFailure } = recipeSlice.actions;

export default recipeSlice.reducer;
