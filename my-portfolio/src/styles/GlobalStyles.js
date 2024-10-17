// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    background-color: #f0f8ff; /* Soft light blue or keep it as #fff for pure white */
    color: #333;
  }

  section {
    padding: 2rem;
    background-color: #ffffff; /* White background for all sections */
  }

  h2 {
    color: #333;
    margin-bottom: 1rem;
  }

  p {
    color: #555;
    line-height: 1.6;
  }
`;

export default GlobalStyles;
