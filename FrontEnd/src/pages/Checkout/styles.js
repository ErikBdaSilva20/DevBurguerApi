import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle at center, #1a1a1a 0%, #000000 100%);
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const Content = styled.div`
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

export const Title = styled.h1`
  color: #fff;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 30px;
  text-align: center;
  letter-spacing: 0.5px;
`;

export const RedirectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  gap: 15px;

  h2 {
    font-size: 22px;
    color: #ef4444;
  }

  p {
    font-size: 16px;
    color: #94a3b8;
  }
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #94a3b8;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 20px;
  transition: color 0.2s;

  &:hover {
    color: #fff;
  }

  svg {
    font-size: 18px;
  }
`;
