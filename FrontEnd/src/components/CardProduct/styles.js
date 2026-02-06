import styled from 'styled-components';

/* Card principal */
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-top: 15px;
  min-height: 320px;
  padding: 16px;
  background-color: #000000ce;
  cursor: pointer;

  border: 2px solid gold;
  border-radius: 12px;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-6px);
    transform: scale(1.04);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.45);
  }

  button {
    width: 90%;
    height: 50px;

    margin-top: auto;
    padding: 8px 24px;
    border: 1px solid gold;
    border-radius: 4px;
    background-color: #ffbb008a;
    color: #ffffff;
    font-size: 25px;
    font-weight: 600;
    cursor: pointer;
    transition: filter 0.25s ease;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

/* Imagem do produto */
export const CardImage = styled.div`
  width: 250px;
  height: 200px;
  background-image: url(${(props) => props.$imageurl});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

/* Informações do produto */
export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  margin: 15px 0;
  width: 100%;

  p {
    font-size: 24px;
    font-weight: 600;
    color: #ffffff;
    text-align: start;

    width: 90%;
  }

  strong {
    font-size: 26px;
    color: #ffffff;
    width: 90%;
    text-align: start;
    text-shadow: 0px 4px 6px rgb(255, 166, 0);
    font-family: 'UnifrakturCook', cursive;
  }
`;
