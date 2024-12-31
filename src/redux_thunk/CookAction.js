import { fetchRecipesRequest, fetchRecipesSuccess, fetchRecipesFailure } from "../redux_thunk/CookReducer";

export const fetchRecipes = () => async (dispatch) => {
  dispatch(fetchRecipesRequest());
  try {
    const response = await fetch('https://dummyjson.com/recipes');
    const data = await response.json();
    dispatch(fetchRecipesSuccess(data.recipes));
  } catch (error) {
    dispatch(fetchRecipesFailure(error.toString()));
  }
};
