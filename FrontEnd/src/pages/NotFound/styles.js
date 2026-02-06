import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #292929;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;

    span {
      color: red;
    }
  }

  button {
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: #1a1a1a;
    border: 1px solid gold;
    color: #ffffff;
    font-weight: bold;
    font-size: 1.5em;
    transition: all 0.3s ease-in-out;
  }
`;
