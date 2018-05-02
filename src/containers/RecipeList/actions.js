import SET_RECIPES from './constants';

import selectRecipeList from './selectors';
import { hideEditModal } from '../RecipeItem/actions';

const initialState = [
  {
    id: 1,
    title: 'Pasta',
    ingridients: 'cremini mushrooms,butter,salt,black pepper,milk,Parmesan cheese,spaghetti',
  },
  {
    id: 2,
    title: 'Mushroom Toast with Fried Egg',
    ingridients: '4 large eggs, 4 slices bread, 3 tablespoons olive oil, 1/2 teaspoon salt, 1 pound mushrooms',
  },
];

export function setRecipes(recipes) {
  return {
    type: SET_RECIPES,
    payload: recipes,
  };
}

export const loadRecipes = () => (dispatch) => {
  const recipes = JSON.parse(window.localStorage.getItem('_my_recipes')) || initialState;
  dispatch(setRecipes(recipes));
};

export const deleteItem = id => (dispatch, getState) => {
  const state = getState();
  const recipes = selectRecipeList()(state).filter(recipe => recipe.id !== id);
  window.localStorage.setItem('_my_recipes', JSON.stringify(recipes));
  dispatch(setRecipes(recipes));
};

export const saveItemUpdates = (id, title, ingridients) => (dispatch, getState) => {
  const state = getState();
  let recipes = selectRecipeList()(state);
  if (!recipes.length || (recipes.length && recipes[recipes.length - 1].id < id)) {
    recipes.push({ id, title, ingridients });
  } else {
    recipes = recipes.map(recipe => (recipe.id === id ? { id, title, ingridients } : recipe));
  }
  window.localStorage.setItem('_my_recipes', JSON.stringify(recipes));

  dispatch(setRecipes(recipes));
  dispatch(hideEditModal());
};
