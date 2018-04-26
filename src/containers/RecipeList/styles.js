import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 1400px;
  padding: 10px;
  max-width: 100%;
  margin: auto;
`;

export const Title = styled.h2`
  font-size: 40px;
  font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
  text-align: center;
  color: brown;
`;

export const Button = styled.button`
  display: inline-block;
  color: brown;
  font-size: 16px;
  margin: 30px auto;
  padding: 7px 15px;
  border: 2px solid brown;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    color: lemonchiffon;
    background-color: brown;
  }
`;
