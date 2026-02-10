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
  font-size: clamp(2.5rem, 8vw, 5rem);
  font-weight: lighter;
  margin: 1rem 0;
  padding-bottom: 1rem;
  text-align: center;
  color: ${({ theme }) => theme.white};
  position: relative;
  font-family: ${({ theme }) => theme.fonts.roadRage};

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 3px;
    background-color: ${({ theme }) => theme.white};
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const GridSlide = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px;
  padding: 10px;
  place-items: center;

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
    color: ${({ theme }) => theme.white};
    font-size: 20px;
    font-weight: 600;
    padding: 8px 18px;
    border-radius: 20px;
    background: rgba(0, 0, 0, 0.55);
    border-bottom: 2px solid transparent;
    transition: all 0.2s;

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

    &:hover {
      border-color: ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.primary};
    }
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
    background: linear-gradient(to top, rgba(0, 0, 0, 0.76), rgba(255, 0, 0, 0));
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
