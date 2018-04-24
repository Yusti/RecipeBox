/* eslint-env browser */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import App from './containers/RecipeList';

import './styles';

render(
  <App />,
  document.getElementById('root'),
);
