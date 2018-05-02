import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px;
  max-width: 100%;
  margin: auto;
`;

export const Title = styled.h1`
  font-size: 40px;
  margin-top: 60px;
  font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
  text-align: center;
  color: brown;
`;

export const EmptyBox = styled.div`
  font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
  text-align: center;
  color: darkred;
  h2 {
    font-size: 32px;
    margin: 40px 10px 10px;
  }
  p {
    font-size: 22px;
  }
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
