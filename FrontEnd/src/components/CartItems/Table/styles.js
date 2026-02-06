import styled from 'styled-components';

export const Root = styled.table`
  width: 100%;
  border-collapse: collapse;

  background-color: #555555;
  border-radius: 20px;

  overflow: hidden;

  margin-bottom: 150px;
`;

export const Header = styled.thead``;

export const Tr = styled.tr`
  .price {
    color: gold;
    font-weight: 400;

    font-family: 'lato', sans-serif;
  }
`;

export const Th = styled.th`
  padding: 16px;
  text-align: left;
  background-color: #222222;
  color: #fff;

  &:first-child,
  last-child {
    border-top-left-radius: 20px;
  }

  &:last-child {
    border-top-right-radius: 20px;
  }
`;
export const Td = styled.td`
  padding: 16px;
  color: #ffffff;
  line-height: 115%;
  font-weight: 550;

  .icon {
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    color: #ff8282;

    &:hover {
      color: #ff0000;
      scale: calc(1.3);
    }
  }
`;

export const Body = styled.tbody``;
