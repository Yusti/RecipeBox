import { createSelector } from 'reselect';

import selectRecipeList from '../RecipeList/selectors';

export const selectEditModalVisibility = () => state => state.recipeItem.editRecipe;
export const selectActiveId = () => state => state.recipeItem.activeId;
export const selectCurrentRecipe = () => createSelector(
  [selectRecipeList(), selectActiveId()],
  (recipes, id) => recipes.filter(recipe => recipe.id === id)[0] || { id, title: '', ingridients: '' },
);
