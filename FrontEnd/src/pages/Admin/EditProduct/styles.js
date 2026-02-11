import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 520px;
  background: ${({ theme }) => theme.secondBlack};
  padding: 32px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  .checkbox {
    width: 24px;
    height: 24px;

    accent-color: ${({ theme }) => theme.secondary};

    cursor: pointer;
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.white};

  svg {
    font-size: 18px;
    color: ${({ theme }) => theme.secondary};
  }
`;

export const Input = styled.input`
  padding: 12px 14px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.mainBlack};
  background-color: ${({ theme }) => theme.mainBlack};
  color: ${({ theme }) => theme.white};
  font-size: 14px;
  transition: all 0.2s ease;

  &::placeholder {
    color: #999;
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.secondary};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.secondary}33;
  }
`;

export const LabelUpload = styled.label`
  height: 140px;
  border-radius: 12px;
  border: 2px dashed ${({ theme }) => theme.secondary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.mainBlack};
  transition: all 0.3s ease;

  svg {
    font-size: 36px;
    color: ${({ theme }) => theme.secondary};
  }

  input {
    display: none;
  }

  &:hover {
    background-color: ${({ theme }) => theme.secondBlack};
    border-color: ${({ theme }) => theme.primary};
  }
`;

export const Select = styled.select`
  padding: 12px 14px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.mainBlack};
  background-color: ${({ theme }) => theme.mainBlack};
  color: ${({ theme }) => theme.white};
  font-size: 14px;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.secondary};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.secondary}33;
  }
`;

export const SubmitButton = styled.button`
  margin-top: 12px;
  padding: 14px;
  border-radius: 10px;
  border: none;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.secondary},
    ${({ theme }) => theme.primary}
  );
  color: ${({ theme }) => theme.white};
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    filter: brightness(1.1);
    transform: translateY(-1px);
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const Deletion = styled.div``;

export const DeleteButton = styled.button`
  margin-top: 12px;
  padding: 14px;
  border-radius: 10px;
  border: none;
  background: linear-gradient(135deg, #ff4d4d, #e60000);
  color: ${({ theme }) => theme.white};
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;

  width: 500px;
  max-width: 520px;

  &:hover {
    filter: brightness(1.6);
    scale: calc(1.05);
    transform: translateY(-4px);
  }

  &:active {
    transform: scale(0.98);
  }
`;
