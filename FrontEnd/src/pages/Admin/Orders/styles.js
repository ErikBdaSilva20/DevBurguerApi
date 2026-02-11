// styles.js
import styled from 'styled-components';
import Select from 'react-select';

export const Container = styled.div`
  .TableContainer {
    margin-top: 16px;
    background-color: ${({ theme }) => theme.secondBlack};
    border-radius: 8px;
    padding: 16px;
  }

  .Tc {
    color: ${({ theme }) => theme.white};
    font-weight: 500;
  }

  .Tr {
    color: ${({ theme }) => theme.primary};
  }

  .TcName {
    color: ${({ theme }) => theme.secondary};
    font-weight: bold;
    font-size: 16px;
  }
`;

export const SelectProductsByFilter = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  background-color: ${({ theme }) => theme.mainBlack};
  padding: 12px;
  border-radius: 8px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SelectButton = styled.button`
  border: none;
  padding: 8px 20px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
  background-color: ${({ $activeStatus, theme }) =>
    $activeStatus === 'active' ? theme.secondary : theme.mainBlack};
  color: ${({ theme }) => theme.white};
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.darkGray};
    color: ${({ theme }) => theme.primary};
  }

  &:active {
    transform: scale(0.97);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #ffd900;
  }
`;

// Select usado na tabela e nos detalhes do pedido
export const SelectStatus = styled(Select).attrs({
  styles: {
    menuPortal: (base) => ({ ...base, zIndex: 9999 }),
    control: (provided, state) => ({
      ...provided,
      backgroundColor: '#222',
      border: '1px solid #555',
      borderRadius: '6px',
      boxShadow: state.isFocused ? '0 0 0 2px #ff8c05' : 'none',
      '&:hover': { borderColor: '#ff8c05' },
      color: '#fff',
    }),
    singleValue: (provided) => ({
      ...provided,
      color: '#fff',
    }),
    placeholder: (provided) => ({
      ...provided,
      color: '#aaa',
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: '#222',
      borderRadius: '6px',
      marginTop: 4,
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#ff8c05' : state.isFocused ? '#333' : '#222',
      color: state.isSelected ? '#000' : '#fff',
      cursor: 'pointer',
      padding: '10px 12px',
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: '#fff',
      '&:hover': { color: '#ff8c05' },
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      backgroundColor: '#555',
    }),
  },
})``;
