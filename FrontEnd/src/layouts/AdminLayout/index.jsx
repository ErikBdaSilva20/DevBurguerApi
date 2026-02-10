import { Outlet, Navigate } from 'react-router-dom';
import { Container, Main, Section } from './styles.js';
import { SideNavAdmin } from '../../components/SideNav/index.jsx';

export function AdminLayout() {
  const userData = localStorage.getItem('devburguer:userData');

  if (!userData) {
    return <Navigate to="/login" replace />;
  }

  let parsedUser;

  try {
    parsedUser = JSON.parse(userData);
  } catch {
    return <Navigate to="/login" replace />;
  }

  if (!parsedUser.admin) {
    return <Navigate to="/" replace />;
  }

  return (
    <Container>
      <SideNavAdmin />
      <Main>
        <Section>
          <Outlet />
        </Section>
      </Main>
    </Container>
  );
}
