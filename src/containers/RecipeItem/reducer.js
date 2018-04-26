import {
  SHOW_DETAILS_MODAL,
  HIDE_DETAILS_MODAL,
  SHOW_EDIT_MODAL,
  HIDE_EDIT_MODAL,
  DELETE_ITEM,
  SAVE_ITEM_UPDATES,
  FORM_HANDLE_CHANGE,
} from './constants';

const initialState = {
  showDetails: false,
  editRecipe: false,
  activeId: -1,
  activeTitle: '',
  activeIngridients: '',
};

export default function recipeItem(state = initialState, action) {
  switch (action.type) {
    case SHOW_DETAILS_MODAL:
      return {
        ...state,
        activeId: action.payload.id,
        activeTitle: action.payload.title,
        activeIngridients: action.payload.ingridients,
        showDetails: true,
      };
    case HIDE_DETAILS_MODAL:
    case DELETE_ITEM:
      return {
        ...state,
        showDetails: false,
      };
    case SHOW_EDIT_MODAL:
      return {
        ...state,
        activeId: action.payload.id,
        activeTitle: action.payload.title,
        activeIngridients: action.payload.ingridients,
        editRecipe: true,
      };
    case HIDE_EDIT_MODAL:
    case SAVE_ITEM_UPDATES:
      return {
        ...state,
        editRecipe: false,
      };
    case FORM_HANDLE_CHANGE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
