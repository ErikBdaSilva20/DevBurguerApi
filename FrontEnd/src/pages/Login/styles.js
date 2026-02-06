import styled from 'styled-components';
import abstractBackground from '../../assets/abstractBackground.jpg';
import LoginBackground2 from '../../assets/formBackground.jpg';

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

export const LeftContainer = styled.div`
  position: relative;
  background: url(${abstractBackground});
  background-size: cover;
  background-position: center;

  height: 100%;
  width: 100%;
  max-width: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  /* Logo */
  img {
    height: 50%;
    z-index: 2;
    position: relative;
  }

  /* Overlay de escurecimento */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.45);
    z-index: 1;
  }
`;

export const RightContainer = styled.div`
  background-image: url(${LoginBackground2});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;
  width: 100%;
  height: 100%;
  max-width: 50%;

  color: #fff;
  z-index: 2;
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.63);
    z-index: -1;
  }
`;

export const Title = styled.h2`
  font-family: 'Luxurious Script', cursive;
  font-weight: 200;
  font-style: normal;
  font-size: 3rem;
  text-align: center;

  .span1,
  .span2 {
    font-family: 'road rage', sans-serif;
    font-weight: 300;
    color: gold;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  width: 100%;
  max-width: 400px;
`;

export const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  color: #fff;

  input {
    width: 100%;
    border: 1px solid gold;
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: #030303;
    color: #fff;

    &::placeholder {
      color: #c2c2c2;
      font-size: 1rem;
      font-weight: bold;
    }

    &:hover {
      border-color: white;
      scale: calc(1.06);
    }
  }

  label {
    font-weight: bold;
    font-size: 1.2rem;
  }

  p {
    color: red;
    font-weight: bold;
    line-height: 20%;
    font-size: 0.9rem;
    font-weight: 700;
    height: 10px;
  }
`;

export const ForgetPassword = styled.button`
  display: flex;
  justify-content: end;
  align-items: end;
  width: 100%;
  font-size: 1rem;

  color: #fff;
  border: none;
  background-color: transparent;
  font-weight: lighter;

  &:hover {
    color: gold;
  }
`;

export const DontHaveAccount = styled.p`
  color: #fff;
  font-weight: lighter;
  font-size: 1.2rem;

  button {
    color: #ffffff;
    font-size: 1.2rem;
    font-weight: bold;
    text-decoration: none;
    border-bottom: 2px solid gold;
    background-color: transparent;
    border: none;
    border-bottom: 2px solid gold;

    &:hover {
      color: gold;
    }
  }
`;
