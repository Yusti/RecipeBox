import styled from 'styled-components';

export const Button = styled.button`
  display: inline-block;
  color: tomato;
  font-size: 16px;
  font-weight: bold;
  margin: 20px auto;
  border: none;
  background-color: transparent;
  cursor: pointer;
  text-decoration: underline;
  &:hover {
    text-decoration: none;
  }
`;

export const Form = styled.form`
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  font-size: 16px;
  color: darkred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  width: 400px;
  max-width: 100%;
`;

export const Textarea = styled.textarea`
  padding: 0.5em;
  margin: 0.5em;
  font-size: 16px;
  color: darkred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  width: 400px;
  max-width: 100%;
`;

export const Label = styled.label`
  margin-top: 20px;
  font-size: 22px;
  color: maroon;
  text-align: center;
`;
