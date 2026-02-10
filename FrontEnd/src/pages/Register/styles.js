import styled from 'styled-components';
import {
  AuthContainer,
  AuthForm,
  AuthInputContainer,
  AuthLeftContainer,
  AuthRightContainer,
  AuthTitle,
} from '../../styles/sharedStyles';

export const Container = AuthContainer;
export const LeftContainer = AuthLeftContainer;
export const RightContainer = AuthRightContainer;
export const Form = AuthForm;
export const ContainerInputs = AuthInputContainer;
export const Title = AuthTitle;

export const ForgetPassword = styled.button`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
  color: ${({ theme }) => theme.white};
  border: none;
  background-color: transparent;
  font-weight: lighter;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

export const DontHaveAccount = styled.p`
  color: ${({ theme }) => theme.white};
  font-weight: lighter;
  font-size: 1rem;

  a {
    color: ${({ theme }) => theme.white};
    font-weight: bold;
    text-decoration: none;
    border-bottom: 2px solid ${({ theme }) => theme.primary};
    margin-left: 5px;

    &:hover {
      color: ${({ theme }) => theme.primary};
    }
  }
`;
