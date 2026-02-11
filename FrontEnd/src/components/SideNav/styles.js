import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.nav`
  width: 300px;
  position: sticky; /* mantém fixo ao rolar */
  top: 0; /* topo da tela */
  height: 100vh; /* ocupa toda a altura da viewport */
  background: ${({ theme }) => theme.mainBlack || '#1f1f1f'};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 0;
  box-shadow: 4px 0 10px rgba(0, 0, 0, 0.3);

  div {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 40px;
  }
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 15px 24px;
  text-decoration: none;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s ease;
  background: ${(props) => (props.$isActive ? props.theme.secondary || '#ff8c05' : 'transparent')};
  margin: 0 10px;
  border-radius: 8px;

  &:hover {
    background: ${(props) => props.theme.secondary || '#ff8c05'};
    opacity: 0.9;
    transform: translateX(5px);
  }

  .icon {
    font-size: 24px;
    color: ${(props) => (props.$isActive ? '#ffffff' : props.theme.textGray || '#94a3b8')};
  }

  ${(props) =>
    props.$isActive &&
    `
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  `}
`;

export const Logo = styled.img`
  width: 250px;
  margin: 20px auto;
  padding: 10px;
  object-fit: contain;

  @media (max-width: 768px) {
    width: 200px;
  }
`;

export const Footer = styled.div`
  border-top: 1px solid ${(props) => props.theme.primary};
  padding-top: 10px;
`;
