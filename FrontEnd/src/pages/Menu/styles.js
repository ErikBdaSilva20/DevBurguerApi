import styled from 'styled-components';
import containerBackground from '../../assets/background.jpg';
import BannerImg from '../../assets/bannerMenu.jpg';

export const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${containerBackground});

  padding-bottom: 5px;
`;

export const Banner = styled.section`
  position: relative;
  height: 480px;
  width: 100%;

  background:
    linear-gradient(to right, rgba(0, 0, 0, 0.37), rgba(0, 0, 0, 0.14)), url(${BannerImg});
  background-size: cover;
  background-position: center top 40%;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: space-around;

  color: #ffffff;

  /* ===== Conteúdo interno ===== */
  > div {
    max-width: 420px;
  }

  h1 {
    font-size: 70px;
    font-weight: 500;
    line-height: 1.1;
    margin-bottom: 16px;
    font-family: 'road rage', sans-serif;
  }

  span {
    font-size: 18px;
    opacity: 0.9;
  }

  /* ===== Mobile ===== */
  @media (max-width: 768px) {
    height: 420px;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 0 20px;

    > div {
      max-width: 100%;
      margin-bottom: 20px;
    }

    h1 {
      font-size: 30px;
    }

    span {
      font-size: 16px;
    }
  }
`;

export const CategoriesMenu = styled.div`
  display: flex;
  justify-content: center;

  margin: 50px auto;
  padding: 40px;
  max-width: 1280px;
  gap: 60px;
`;

export const CategorieButton = styled.button`
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: #808080;
  font-size: 25px;
  font-weight: bold;
  padding-bottom: 10px;

  background: none;
  border: none;

  border-bottom: ${(props) => props.$isActiveCategory && '3px solid gold'};
  color: ${(props) => props.$isActiveCategory && 'gold'};

  &:hover {
    transform: scale(1.1);
  }
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;

  margin: 50px auto;
  padding: 40px;
  max-width: 1280px;
  gap: 60px;
  .menuImage {
    width: 100%;
    height: 100%;
    object-fit: cover;

    border-radius: 8px;
  }
`;
