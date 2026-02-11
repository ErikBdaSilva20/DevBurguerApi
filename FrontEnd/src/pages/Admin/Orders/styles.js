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

  .TcName {
    color: ${({ theme }) => theme.secondary};
    font-weight: bold;
    font-size: 16px;
  }
`;

// Container do grupo de botões
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

// Botões de status
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

export const SelectStatus = styled(Select)`
  width: 240px;
`;

export const customSelectStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: '#1a1a1a', // cor do select fechado
    border: '1px solid #444',
    color: '#fff',
  }),
  singleValue: (provided) => ({
    ...provided,
    color: '#fff', // cor do texto selecionado
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: 'rgba(0, 0, 0, 0)', // fundo do dropdown
    color: '#fff',
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#ff8800' : state.isFocused ? '#333' : '#1a1a1a',
    color: state.isSelected ? '#000' : '#fff',
    cursor: 'pointer',
  }),
  placeholder: (provided) => ({
    ...provided,
    color: '#aaa',
  }),
};
