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
  background-color: ${({ theme }) => theme.gray};
`;

export const Section = styled.section`
  margin: 0 auto;
  padding: 40px 20px;
  max-width: 1200px;
  width: 100%;
`;
