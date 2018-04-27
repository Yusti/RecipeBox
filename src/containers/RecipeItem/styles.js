import styled from 'styled-components';


export const Item = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  margin: 10px;
  width: 380px;
  max-width: 100vw;
  height: 360px;
  max-width: 90vw;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const Title = styled.h2`
  font-size: 40px;
  font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
  text-align: center;
  color: brown;
`;

export const customStyles = {
  content: {
    // backgroundImage: `url(${bgModal})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
};
