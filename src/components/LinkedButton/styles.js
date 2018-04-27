import styled from 'styled-components';

const Button = styled.button`
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

export default Button;
