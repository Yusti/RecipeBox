import styled from 'styled-components';

export const Title = styled.h2`
  font-size: 32px;
  font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
  text-align: center;
  color: brown;
`;

export const Subtitle = styled.h2`
  font-size: 28px;
  font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
  color: maroon;
  text-decoration: underline;
  font-style: italic;
`;

export const IngridientsWrapper = styled.div`
  text-align: center;
  width: 500px;
  max-width: 100%;
  margin: 30px auto;
`;

export const Ingridient = styled.li`
  text-align: left;
  font-size: 20px;
  font-family: "Lucida Console", Monaco, monospace;
  color: darkred;
  font-style: italic;
`;

export const Button = styled.button`
  display: inline-block;
  color: tomato;
  font-size: 16px;
  font-weight: bold;
  margin: auto;
  border: none;
  background-color: transparent;
  cursor: pointer;
  text-decoration: underline;
  &:hover {
    text-decoration: none;
  }
`;
