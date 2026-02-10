import styled from 'styled-components';

export const Container = styled.div`
  background: ${(props) => props.theme.background};
  min-height: 100vh;
  padding: 2.5rem;
`;

export const Table = styled.table`
  width: 100%;
  background: ${(props) => props.theme.mainBlack};
  border-radius: 8px;
  border-collapse: separate;
  border-spacing: 0 1rem;
  padding: 0 1rem;

  thead th {
    color: ${(props) => props.theme.textGray};
    text-align: left;
    padding: 1rem;
    font-weight: 500;
  }

  tbody tr {
    background: ${(props) => props.theme.secondBlack};
    border-radius: 8px;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.005);
    }
  }

  tbody td {
    padding: 1rem;
    color: ${(props) => props.theme.white};
    vertical-align: middle;

    &:first-child {
      border-radius: 8px 0 0 8px;
    }
    &:last-child {
      border-radius: 0 8px 8px 0;
    }
  }
`;

export const ProductImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 12px;
  object-fit: cover;
  border: 2px solid ${(props) => props.theme.secondBlack};
`;

export const EditButton = styled.button`
  background: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.mainBlack};
  border: none;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background: ${(props) => props.theme.secondary};
    color: #fff;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const OfferIndicator = styled.div`
  color: ${(props) => (props.$isOffer ? props.theme.success : props.theme.danger)};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
`;
