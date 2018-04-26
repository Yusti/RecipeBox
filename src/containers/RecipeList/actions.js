import GET_RECIPES from './constants';

export default function getRecipes() {
  const recipes = JSON.parse(window.localStorage.getItem('_my_recipes'));
  return {
    type: GET_RECIPES,
    payload: recipes,
  };
}
