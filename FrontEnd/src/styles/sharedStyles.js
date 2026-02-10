import styled from 'styled-components';

// Auth Shared Styles (Login / Register)
export const AuthContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

export const AuthLeftContainer = styled.div`
  position: relative;
  background: url(${(props) => props.$background});
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
  max-width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 50%;
    z-index: 2;
    position: relative;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.45);
    z-index: 1;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const AuthRightContainer = styled.div`
  background-image: url(${(props) => props.$background});
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
  color: ${({ theme }) => theme.white};
  z-index: 2;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.63);
    z-index: -1;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const AuthTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.luxurious};
  font-weight: 200;
  font-size: 3rem;
  text-align: center;

  span {
    font-family: ${({ theme }) => theme.fonts.roadRage};
    font-weight: 300;
    color: ${({ theme }) => theme.primary};
  }
`;

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  width: 100%;
  max-width: 400px;
`;

export const AuthInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  color: ${({ theme }) => theme.white};

  input {
    width: 100%;
    border: 1px solid ${({ theme }) => theme.primary};
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.darkestBlack};
    color: ${({ theme }) => theme.white};

    &::placeholder {
      color: ${({ theme }) => theme.placeholderGray};
      font-size: 1rem;
      font-weight: bold;
    }

    &:hover {
      border-color: ${({ theme }) => theme.white};
      transform: scale(1.02);
      transition: transform 0.2s;
    }
  }

  label {
    font-weight: bold;
    font-size: 1.2rem;
  }

  p {
    color: ${({ theme }) => theme.danger};
    font-weight: 700;
    font-size: 0.9rem;
    height: 10px;
  }
`;

// Glassmorphism Shared Styles (Checkout / CompletePayment)
export const GlassContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle at center, ${({ theme }) => theme.mainBlack} 0%, #000000 100%);
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const GlassContent = styled.div`
  width: 100%;
  max-width: 600px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);

  @media (max-width: 768px) {
    padding: 20px;
    border-radius: 15px;
  }
`;
