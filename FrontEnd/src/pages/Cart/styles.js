import styled from 'styled-components';
import bannerBeerBurguer from '../../assets/BannerBeerBurguer.jpg';
import abstractBackground from '../../assets/abstractBackground.jpg';
export const Container = styled.div`
  width: 100%;
  background-color: #292929;
  min-height: 100vh;
  position: relative;

  background-image: url(${abstractBackground});
  min-height: 100vh;
`;

export const Banner = styled.div`
  position: relative;
  height: 280px;
  width: 100%;

  background-image: url(${bannerBeerBurguer});
  background-size: cover;
  background-position: center;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;

  img {
    max-width: 500px;
    width: 100%;
    height: auto;
    z-index: 2;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.64);
    z-index: 1;
  }
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 800;
  padding-bottom: 12px;
  color: #ffa600;
  text-align: center;
  position: relative;

  margin-top: 30px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 4px;
    background-color: #ff9100;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 40px auto;
  padding: 40px;
  max-width: 1280px;
  gap: 60px;
`;
