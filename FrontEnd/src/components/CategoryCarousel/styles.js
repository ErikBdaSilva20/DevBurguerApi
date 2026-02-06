import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  padding-left: 40px;

  @media (max-width: 768px) {
    padding-left: 0;
    padding: 0 12px;
  }
`;

export const Title = styled.h2`
  font-size: 5rem;
  font-weight: lighter;
  margin: 1rem 0;
  padding-bottom: 1rem;
  text-align: center;
  color: #ffffff;
  position: relative;
  font-family: 'road rage', sans-serif;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 3px;
    background-color: #ffffff;
  }

  @media (max-width: 768px) {
    font-size: 26px;
  }
`;

export const GridSlide = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px;
  padding: 10px;
  place-items: center; /* 🔥 chave */

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 14px;
    padding: 5px;
  }
`;

export const CategoryButton = styled(Link)`
  border: none;
  text-decoration: none;

  p {
    position: relative;
    z-index: 1;
    margin: 0;
    color: #fff;
    font-size: 20px;
    font-weight: 600;
    padding: 8px 18px;
    border-radius: 20px;
    background: rgba(0, 0, 0, 0.55);

    // only one Blink animation to sinalize this button are a interative button

    @keyframes blink {
      0% {
        opacity: 1;
      }
      50% {
        opacity: 0.7;
      }
      75% {
        opacity: 0.8;
      }
      100% {
        opacity: 1;
      }
    }
    animation: blink 1.5s infinite;
  }

  @media (max-width: 768px) {
    height: 200px;

    p {
      font-size: 16px;
      padding: 6px 14px;
    }
  }
`;

export const ContainerItems = styled.div`
  position: relative;
  background: url(${(props) => props.$imageurl});
  background-size: cover;
  background-position: center;
  border-radius: 18px;
  width: 60%;

  height: 250px;
  display: flex;
  align-items: flex-end;
  padding: 16px;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.76), rgba(240, 7, 7, 0));
  }
`;
