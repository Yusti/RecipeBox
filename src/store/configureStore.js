import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

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

export default function configureStore(state = initialState) {
  if (!window.localStorage.getItem('_my_recipes')) {
    window.localStorage.setItem('_my_recipes', JSON.stringify(state));
  }
  const persistedState = JSON.parse(window.localStorage.getItem('_my_recipes'));
  const store = createStore(rootReducer, persistedState, applyMiddleware(thunk));
  return store;
}
