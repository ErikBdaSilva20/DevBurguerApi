import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
`;

export const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto; /* faz o conteúdo rolar */
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.mainBlack} 0%,
    ${({ theme }) => theme.secondBlack} 100%
  );
`;

export const Section = styled.section`
  margin: 0 auto;
  padding: 40px 20px;
  max-width: 1200px;
  width: 100%;
`;

export const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.danger};
  font-size: 15px;
  margin-top: 4px;
  font-weight: 600;
`;
