import {
  TOGGLE_DETAILS_VISIBILITY,
  SHOW_EDIT_MODAL,
  HIDE_EDIT_MODAL,
} from './constants';

import selectRecipeList from '../RecipeList/selectors';
import { selectActiveId } from './selectors';

export const toggleDetailsVisibility = id => (dispatch, getState) => {
  const state = getState();
  const activeId = selectActiveId()(state) === id ? -1 : id;
  dispatch({
    type: TOGGLE_DETAILS_VISIBILITY,
    payload: activeId,
  });
};

export function showEditModal(id) {
  return {
    type: SHOW_EDIT_MODAL,
    payload: id,
  };
}

export const showNewRecipeModal = () => (dispatch, getState) => {
  const state = getState();
  const recipes = selectRecipeList()(state);
  const id = recipes.length ? recipes[recipes.length - 1].id + 1 : 1;
  dispatch(showEditModal(id));
};

export function hideEditModal() {
  return {
    type: HIDE_EDIT_MODAL,
  };
}
