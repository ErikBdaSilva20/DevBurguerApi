// styles.js
import styled from 'styled-components';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import DangerousIcon from '@mui/icons-material/Dangerous';

// Container principal da página
export const Container = styled.div`
  padding: 20px;

  .icon {
    cursor: pointer;
    color: ${({ theme }) => theme.white};

    &:hover {
      color: ${({ theme }) => theme.secondary};
      transition: color 0.2s ease;
    }
  }

  .MuiTableCell-root {
    color: ${({ theme }) => theme.white};
    font-weight: 500;
  }

  .MuiTableHead-root {
    background-color: ${({ theme }) => theme.mainBlack};
  }

  .MuiTableContainer-root {
    background-color: ${({ theme }) => theme.secondBlack};
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  }
`;

// Imagem do produto
export const ProductImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  overflow: visible;
`;

// Ícones de oferta / não oferta
export const OfferIcon = styled(VerifiedUserIcon)`
  color: ${({ theme }) => theme.lime || '#00ff6a'};
`;

export const NotOfferIcon = styled(DangerousIcon)`
  color: ${({ theme }) => theme.danger || '#e74c3c'};
`;

// Opcional: célula de preço personalizada (para facilitar futuras alterações)
export const PriceCell = styled.td`
  text-align: center;
  font-weight: bold;
  color: ${({ theme }) => theme.white};
`;
