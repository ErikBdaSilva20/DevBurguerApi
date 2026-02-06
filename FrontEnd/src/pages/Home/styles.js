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
    color: rgb(255, 251, 0);
    font-size: 7rem;

    font-family: 'road rage', sans-serif;
    font-weight: 400;

    position: absolute;
    top: 30%;
    right: 10%;
  }

  p {
    color: rgb(255, 208, 0);
    font-size: 3rem;

    font-family: 'road rage', sans-serif;
    font-weight: 400;

    position: absolute;
    left: 20%;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: -1;
  }
`;

export const Container = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${containerBackground});

  background-size: cover;
  background-position: center;

  h1 {
    color: #fff;
    font-size: 5rem;
    font-weight: 400;
    font-family: 'road rage', sans-serif;

    text-align: center;
    padding: 2rem 0;
  }
`;

export const Content = styled.div`
  padding-bottom: 70px;

  .react-multiple-carousel__arrow--right::before,
  .react-multiple-carousel__arrow--left::before {
    color: gold;
    font-size: 1.5rem;
    font-weight: bold;
  }

  .react-multiple-carousel__arrow--right,
  .react-multiple-carousel__arrow--left {
    background-color: #000000af;
  }
`;
