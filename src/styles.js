import { injectGlobal } from 'styled-components';

injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
    margin: 0;
  }
  #root {
    background-color: lemonchiffon;
    text-align: center;
    min-height: 100%;
    min-width: 100%;
  }
`;
