import { combineReducers } from 'redux';

import recipeList from './containers/RecipeList/reducer';
import recipeItem from './containers/RecipeItem/reducer';

export default combineReducers({
  recipeList,
  recipeItem,
});
