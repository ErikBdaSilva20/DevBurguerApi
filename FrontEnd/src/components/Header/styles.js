import { Link } from 'react-router-dom';
import styled from 'styled-components';

/* ===== CONTAINER ===== */
export const Container = styled.header`
  width: 100%;
  height: 84px;
  background: linear-gradient(180deg, #0c0c0c 0%, #111 100%);
  border-bottom: 1px solid rgba(212, 175, 55, 0.25);
`;

/* ===== CONTENT ===== */
export const Content = styled.div`
  max-width: 1400px;
  height: 100%;
  margin: 0 auto;
  padding: 0 48px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

/* ===== LEFT ===== */
export const Left = styled.div`
  display: flex;
  align-items: center;
`;

/* ===== NAV ===== */
export const Nav = styled.nav`
  display: flex;
  gap: 36px;
`;

/* ===== NAV LINK ===== */
export const NavLink = styled(Link)`
  position: relative;
  text-decoration: none;
  font-size: 25px;
  font-weight: 500;
  letter-spacing: 0.4px;
  color: ${({ $active }) => ($active ? '#d4af37' : '#f5f5f5')};

  transition: color 0.25s ease;

  &:hover {
    color: #d4af37;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: ${({ $active }) => ($active ? '100%' : '0')};
    height: 2px;
    background-color: #d4af37;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

/* ===== RIGHT ===== */
export const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 36px;
`;

/* ===== PROFILE ===== */
export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #fff;

  svg {
    font-size: 30px;

    color: #d4af37;
  }

  div {
    display: flex;
    flex-direction: column;
    line-height: 1.1;

    span {
      font-size: 20px;

      color: #aaa;
      font-weight: 400;
    }

    strong {
      font-size: 20px;

      font-weight: 600;
      color: #fff;
    }
  }
`;

/* ===== LOGOUT ===== */
export const Logout = styled.button`
  margin-left: 8px;
  border: none;
  background: none;
  font-size: 24px;
  font-weight: 600;
  color: #fffb00;
  cursor: pointer;

  opacity: 0.85;

  &:hover {
    opacity: 1;
    text-decoration: underline;
  }
`;

/* ===== CART ===== */
export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  gap: 6px;

  text-decoration: none;
  font-size: 22px;

  font-weight: 500;
  color: #f5f5f5;

  svg {
    font-size: 25px;

    color: #d4af37;
  }

  &:hover {
    color: #d4af37;
  }
`;
