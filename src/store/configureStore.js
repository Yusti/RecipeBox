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
    title: 'Cake',
    ingridients: '1, 2, 3, 4',
  },
  {
    id: 3,
    title: 'Cake3',
    ingridients: '1, 2, 3, 43',
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
