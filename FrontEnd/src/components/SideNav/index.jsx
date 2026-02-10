import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useLocation, useNavigate } from 'react-router-dom';

import LogoImg from '../../assets/BeerBurguerLogo.png';
import { Container, Footer, Logo, NavLink } from './styles';

const menuOptions = [
  {
    id: 1,
    label: 'Pedidos',
    path: '/admin/pedidos',
    icon: ShoppingBagIcon,
  },
  {
    id: 2,
    label: 'Produtos',
    path: '/admin/produtos',
    icon: ShoppingCartIcon,
  },
  {
    id: 3,
    label: 'Novo Produto',
    path: '/admin/adicionar-produto',
    icon: AddShoppingCartIcon,
  },
];

export function SideNavAdmin() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem('account:userData');
    navigate('/login');
  }

  return (
    <Container>
      <Logo src={LogoImg} alt="Logo DevBurguer" />
      <div>
        {menuOptions.map((item) => (
          <NavLink key={item.id} to={item.path} $isActive={pathname === item.path}>
            <item.icon className="icon" />
            {item.label}
          </NavLink>
        ))}
      </div>
      <Footer>
        <NavLink to="/login" onClick={logout}>
          <LogoutIcon className="icon" />
          Sair
        </NavLink>
      </Footer>
    </Container>
  );
}
