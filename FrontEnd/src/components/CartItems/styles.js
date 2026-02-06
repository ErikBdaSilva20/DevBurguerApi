import styled from 'styled-components';

export const ProductImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 16px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  button {
    border: none;
    background: none;
    cursor: pointer;
    font-size: 30px;
    color: #ffc400;
    font-weight: bold;
    &:hover {
      color: gold;
    }
  }
`;
