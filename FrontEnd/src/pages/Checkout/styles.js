import styled from 'styled-components';
import { GlassContainer, GlassContent } from '../../styles/sharedStyles';

export const Container = GlassContainer;
export const Content = GlassContent;

export const Title = styled.h1`
  color: ${({ theme }) => theme.white};
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
  color: ${({ theme }) => theme.white};
  gap: 15px;

  h2 {
    font-size: 22px;
    color: ${({ theme }) => theme.danger};
  }

  p {
    font-size: 16px;
    color: ${({ theme }) => theme.textGray};
  }
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.textGray};
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 20px;
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.white};
  }

  svg {
    font-size: 18px;
  }
`;
