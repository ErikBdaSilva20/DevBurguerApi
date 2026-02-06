import 'react-toastify/dist/ReactToastify.css';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0; 
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    font-style: italic;
    outline: none;
  }

  body {
    background-color: #0f172a;
    color: #f8fafc;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
    
    &:active {
      filter: brightness(0.8);
    }
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyles;
