import GET_RECIPES from './constants';

export default function recipeList(state = {}, action) {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipeList: action.payload,
      };
    default:
      return state;
  }
}
