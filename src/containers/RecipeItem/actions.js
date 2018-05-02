import {
  SHOW_DETAILS,
  SHOW_EDIT_MODAL,
  HIDE_EDIT_MODAL,
} from './constants';

export function showDetails(id) {
  return {
    type: SHOW_DETAILS,
    payload: id,
  };
}

export function showEditModal(id) {
  return {
    type: SHOW_EDIT_MODAL,
    payload: id,
  };
}

export const showNewRecipeModal = () => (dispatch, getState) => {
  const state = getState();
  const recipes = state.recipeList.recipeList || [];
  const id = recipes.length ? recipes[recipes.length - 1].id + 1 : 1;
  dispatch(showEditModal(id));
};

export function hideEditModal() {
  return {
    type: HIDE_EDIT_MODAL,
  };
}
