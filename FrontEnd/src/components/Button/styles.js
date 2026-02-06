import styled from 'styled-components';

export const ButtonComponent = styled.button`
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: #1a1a1a;
  border: 1px solid gold;
  color: #ffffff;
  font-weight: bold;
  font-size: 1.5em;
  transition: all 0.3s ease-in-out;

  font-family: 'UnifrakturCook', cursive;
  font-weight: bold;

  &:hover {
    background-color: gold;
    color: black;
    scale: calc(1.06);
  }
`;
