import styled from 'styled-components';
export const Container = styled.div`
  display: grid;
  grid-template-columns: minmax(220px, 300px) 1fr;
  height: 100vh;
`;

export const SideNav = styled.div``;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  height: 100vh;
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
