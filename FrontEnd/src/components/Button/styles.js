import styled from 'styled-components';

export const ButtonComponent = styled.button`
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.mainBlack};
  border: 1px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.white};
  font-weight: bold;
  font-size: 1.5em;
  transition: all 0.3s ease-in-out;
  font-family: ${({ theme }) => theme.fonts.unifraktur};

  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.mainBlack};
    transform: scale(1.06);
  }
`;
