import styled from 'styled-components';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import DangerousIcon from '@mui/icons-material/Dangerous';

export const Container = styled.div`
  .icon {
    cursor: pointer;
    color: ${({ theme }) => theme.white};

    &:hover {
      color: ${({ theme }) => theme.secondary};

      transition: color 0.2s ease;
    }
  }
`;

export const ProductImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 10px;
`;

export const OfferIcon = styled(VerifiedUserIcon)`
  color: ${({ theme }) => theme.lime || '#00ff6a'};
`;

export const NotOfferIcon = styled(DangerousIcon)`
  color: ${({ theme }) => theme.danger || '#e74c3c'};
`;
