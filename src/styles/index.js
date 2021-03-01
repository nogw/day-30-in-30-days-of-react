import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }

  body {
    background-color: #0a7ad6;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    font-family: monospace;
  }
`;

export default GlobalStyle