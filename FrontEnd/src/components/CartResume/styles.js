import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.mainBlack};
  border-radius: 12px;
  padding: 24px;
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  * {
    color: ${({ theme }) => theme.white};
    font-weight: 500;
  }

  .backToAddMoreProducts {
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    background-color: transparent;
    border: none;
    text-decoration: underline;
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.primary};
    }
  }
`;

export const ContainerTop = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  row-gap: 14px;
  column-gap: 32px;
  grid-template-areas:
    'title title'
    'items itemsPrice'
    'deliveryTax deliveryTaxPrice';
`;

export const Title = styled.h2`
  grid-area: title;
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.secondary};
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

export const Items = styled.p`
  grid-area: items;
  font-size: 24px;
  opacity: 0.85;
`;

export const ItemsPrice = styled.p`
  grid-area: itemsPrice;
  font-size: 24px;
  text-align: right;
`;

export const DeliveryTax = styled.p`
  grid-area: deliveryTax;
  font-size: 20px;
  opacity: 0.85;
`;

export const DeliveryTaxPrice = styled.p`
  grid-area: deliveryTaxPrice;
  font-size: 20px;
  text-align: right;
`;

export const ContainerBottom = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  padding-top: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

export const Total = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};

  &:last-child {
    text-align: right;
  }
`;

export const Button = styled.button`
  width: 100%;
  margin-top: 16px;
  padding: 14px 0;
  border-radius: 8px;
  border: none;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.primary},
    ${({ theme }) => theme.secondary}
  );
  color: ${({ theme }) => theme.mainBlack};
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    filter: brightness(1.1);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;
