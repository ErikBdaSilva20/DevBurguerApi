import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useLocation, useNavigate } from 'react-router-dom';
import { useUser } from '../../hooks/userContext.jsx';

import { Cart, Container, Content, Left, Logout, Nav, NavLink, Profile, Right } from './styles.js';

export function Header() {
  const navigate = useNavigate();
  const { userInfo, logout } = useUser();
  const { pathname } = useLocation();

  function handleLogout() {
    logout();
    navigate('/login');
  }

  return (
    <Container>
      <Content>
        <Left>
          <Nav>
            <NavLink to="/" $active={pathname === '/'}>
              Home
            </NavLink>
            <NavLink to="/menu" $active={pathname === '/menu'}>
              Cardápio
            </NavLink>
            <NavLink to="/contato" $active={pathname === '/contato'}>
              Contato
            </NavLink>
          </Nav>
        </Left>

        <Right>
          <Profile>
            <AccountCircleIcon />
            <div>
              <span>Bem-vindo</span>
              <strong>{userInfo?.name}</strong>
            </div>
          </Profile>

          <Cart to="/carrinho">
            <ShoppingCartIcon />
            <span>Carrinho</span>
          </Cart>
          <Logout onClick={handleLogout}>Sair</Logout>
        </Right>
      </Content>
    </Container>
  );
}
