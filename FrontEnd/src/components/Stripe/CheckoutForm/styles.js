import styled from 'styled-components';

export const Wrrapper = styled.div`
  p {
    color: #fff;
    font-weight: 500;
    font-size: 13px;
    margin-top: 30px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const SubmitButton = styled.button`
  background: linear-gradient(90deg, #22c55e 0%, #16a34a 100%);
  color: #fff;
  border: none;
  border-radius: 12px;
  padding: 16px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 4px 15px rgba(34, 197, 94, 0.3);
  margin-top: 10px;

  &:hover {
    background: linear-gradient(90deg, #16a34a 0%, #15803d 100%);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(34, 197, 94, 0.4);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    background: #1e293b;
    color: #64748b;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

export const ErrorMessage = styled.p`
  color: #ef4444;
  font-size: 14px;
  margin-top: -12px;
  text-align: center;
`;

export const SeePaymentMethods = styled.p`
  color: #fff;
  font-weight: 500;
  font-size: 13px;
  margin-top: 30px;
  text-align: center;
`;
