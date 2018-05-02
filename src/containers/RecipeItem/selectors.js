import { createSelector } from 'reselect';

export const selectModalState = () => state => state.recipeItem;
export const selectRecipes = () => state => state.recipeList.recipeList || [];
export const selectActiveId = () => state => state.recipeItem.activeId;
export const selectCurrentRecipe = () => createSelector(
  [selectRecipes(), selectActiveId()],
  (recipes, id) => recipes.filter(recipe => recipe.id === id)[0] || { id, title: '', ingridients: '' },
);
