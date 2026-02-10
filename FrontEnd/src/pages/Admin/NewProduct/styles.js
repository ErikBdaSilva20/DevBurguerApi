import styled from 'styled-components';

export const Container = styled.div`
  background: ${(props) => props.theme.background};
  min-height: 100vh;
  padding: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const FormContainer = styled.form`
  background: ${(props) => props.theme.mainBlack};
  padding: 2.5rem;
  border-radius: 12px;
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
`;

export const Label = styled.label`
  color: ${(props) => props.theme.white};
  font-size: 1rem;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Input = styled.input`
  height: 48px;
  background: ${(props) => props.theme.secondBlack};
  border: 1px solid ${(props) => props.theme.secondBlack};
  border-radius: 8px;
  padding: 0 16px;
  color: ${(props) => props.theme.white};
  font-size: 1rem;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.primary};
  }

  &::placeholder {
    color: ${(props) => props.theme.textGray};
  }
`;

export const Select = styled.select`
  height: 48px;
  background: ${(props) => props.theme.secondBlack};
  border: 1px solid ${(props) => props.theme.secondBlack};
  border-radius: 8px;
  padding: 0 16px;
  color: ${(props) => props.theme.white};
  font-size: 1rem;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.primary};
  }
`;

export const UploadContainer = styled.label`
  height: 120px;
  border: 2px dashed ${(props) => props.theme.secondBlack};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  color: ${(props) => props.theme.textGray};
  transition: all 0.2s;

  &:hover {
    border-color: ${(props) => props.theme.primary};
    background: rgba(255, 238, 0, 0.05);
    color: ${(props) => props.theme.primary};
  }

  input {
    display: none;
  }
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: ${(props) => props.theme.white};
  cursor: pointer;
  font-size: 1rem;

  input {
    width: 20px;
    height: 20px;
    accent-color: ${(props) => props.theme.primary};
  }
`;

export const ErrorMessage = styled.p`
  color: ${(props) => props.theme.danger};
  font-size: 0.875rem;
  margin-top: -1rem;
`;
