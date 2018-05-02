import styled from 'styled-components';

import bgModal from './images/vintage-pergament.jpg';

export const Item = styled.div`
  background-color: wheat;
  margin: 10px auto;
  border: solid 2px tan;
  border-radius: 3px;
  width: 900px;
  max-width: 100%;
`;

export const Title = styled.h2`
  margin: 20px;
  font-size: 32px;
  font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
  text-align: center;
  color: brown;
  cursor: pointer;
`;

export const customStyles = {
  content: {
    backgroundImage: `url(${bgModal})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
};

export const IngridientsWrapper = styled.div`
  text-align: center;
  color: darkred;
  padding: 10px 20px 20px;
  background-color: papayawhip;
  font-family: "Lucida Console", Monaco, monospace;
  h2 {
    text-decoration: underline;
    font-size: 24px;
  }
`;

export const Ingridient = styled.li`
  text-align: left;
  font-size: 20px;
  font-style: italic;
`;
