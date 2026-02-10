import styled from 'styled-components';
import BannerImg from '../../assets/BannerBeerBurguer.jpg';
import containerBackground from '../../assets/background.jpg';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
`;

export const Banner = styled.div`
  background: url(${BannerImg});
  background-size: cover;
  background-position: center;
  position: relative;
  height: 480px;
  z-index: 1;

  h1 {
    color: ${({ theme }) => theme.primary};
    font-size: 5rem;
    font-family: ${({ theme }) => theme.fonts.roadRage};
    font-weight: 400;
    position: absolute;
    top: 20%;
    right: 20%;
  }

  p {
    color: ${({ theme }) => theme.primary};
    font-size: 5rem;

    font-family: ${({ theme }) => theme.fonts.roadRage};
    font-weight: 400;
    position: absolute;
    top: 35%;
    right: 15%;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: -1;
  }
`;

export const Container = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${containerBackground});
  background-size: cover;
  background-position: center;

  h1 {
    color: ${({ theme }) => theme.white};
    font-size: 5rem;
    font-weight: 400;
    font-family: ${({ theme }) => theme.fonts.roadRage};
    text-align: center;
    padding: 2rem 0;
  }
`;

export const Content = styled.div`
  padding-bottom: 70px;

  .react-multiple-carousel__arrow--right::before,
  .react-multiple-carousel__arrow--left::before {
    color: ${({ theme }) => theme.primary};
    font-size: 1.5rem;
    font-weight: bold;
  }

  .react-multiple-carousel__arrow--right,
  .react-multiple-carousel__arrow--left {
    background-color: rgba(0, 0, 0, 0.685);
  }
`;
