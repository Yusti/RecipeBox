import {
  SHOW_DETAILS,
  SHOW_EDIT_MODAL,
  HIDE_EDIT_MODAL,
} from './constants';

const initialState = {
  editRecipe: false,
  activeId: -1,
};

export default function recipeItem(state = initialState, action) {
  switch (action.type) {
    case SHOW_DETAILS:
      return {
        ...state,
        activeId: action.payload,
      };
    case SHOW_EDIT_MODAL:
      return {
        ...state,
        activeId: action.payload,
        editRecipe: true,
      };
    case HIDE_EDIT_MODAL:
      return {
        ...state,
        editRecipe: false,
      };
    default:
      return state;
  }
}
