import {
  SHOW_DETAILS_MODAL,
  HIDE_DETAILS_MODAL,
  SHOW_EDIT_MODAL,
  HIDE_EDIT_MODAL,
  DELETE_ITEM,
  SAVE_ITEM_UPDATES,
  FORM_HANDLE_CHANGE,
} from './constants';

import getRecipesActions from '../RecipeList/actions';

export function showDetailsModal(id, title, ingridients) {
  return {
    type: SHOW_DETAILS_MODAL,
    payload: {
      id,
      title,
      ingridients,
    },
  };
}

export function hideDetailsModal() {
  return {
    type: HIDE_DETAILS_MODAL,
  };
}

export function showEditModal(id, title, ingridients) {
  return {
    type: SHOW_EDIT_MODAL,
    payload: {
      id,
      title,
      ingridients,
    },
  };
}

export const showNewRecipeModal = () => (dispatch, getState) => {
  const state = getState();
  const id = state.recipeList.recipeList[state.recipeList.recipeList.length - 1].id + 1;
  const title = '';
  const ingridients = '';
  dispatch(showEditModal(id, title, ingridients));
};

export function hideEditModal() {
  return {
    type: HIDE_EDIT_MODAL,
  };
}

export function handleChange(event) {
  const payload = {};
  payload[event.target.name] = event.target.value;
  return {
    type: FORM_HANDLE_CHANGE,
    payload,
  };
}

export const deleteItem = id => (dispatch) => {
  const recipes = JSON.parse(window.localStorage.getItem('_my_recipes'))
    .filter(recipe => recipe.id !== id);
  window.localStorage.setItem('_my_recipes', JSON.stringify(recipes));
  dispatch(getRecipesActions());
  dispatch({
    type: DELETE_ITEM,
  });
};

export const saveItemUpdates = id => (dispatch, getState) => {
  const state = getState();
  let recipes = JSON.parse(window.localStorage.getItem('_my_recipes'));
  if (state.recipeList.recipeList[state.recipeList.recipeList.length - 1].id < id) {
    recipes.push({
      id,
      title: state.recipeItem.activeTitle,
      ingridients: state.recipeItem.activeIngridients,
    });
  } else {
    recipes = recipes.map(recipe => (recipe.id === id
      ? { id, title: state.recipeItem.activeTitle, ingridients: state.recipeItem.activeIngridients }
      : recipe));
  }
  window.localStorage.setItem('_my_recipes', JSON.stringify(recipes));
  dispatch(getRecipesActions());
  dispatch({
    type: SAVE_ITEM_UPDATES,
  });
};
