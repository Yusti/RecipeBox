import SET_RECIPES from './constants';

export default function recipeList(state = {}, action) {
  switch (action.type) {
    case SET_RECIPES:
      return {
        ...state,
        recipeList: action.payload,
      };
    default:
      return state;
  }
}
