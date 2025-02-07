import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
   :root {
    --color-primary:rgb(79, 204, 152);
    --color-primary-50:rgb(28, 114, 78);
    --color-secondary:rgb(121, 235, 55);
    --color-tertiary:rgb(206, 235, 45);
    --color-tertiary-50: rgb(238, 241, 24);

    --color-gray-600: #0d0e0ff8;
    --color-gray-500: #0d0e0fed;
    --color-gray-400: #212529;
    --color-gray-300: #868E96;
    --color-gray-200: #E9ECEF;
    --color-gray-100: #F8F9FA;

    --color-instagram: #CF50AC;
    --color-twitter: #000000;

    --Font-Primary: 'Inter', sans-serif;

    font-size: 60%;   
    
  }

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%; 
    }
  }
  
  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }

  body,html{
    width: 100vw;
    height: 100vh;
  }

  body {
    background: var(--color-gray-900);
    color: var(--color-gray-300);
    -webkit-font-smoothing: antialiased;

    overflow-x: hidden;
  }

  body, input, button, textarea {
    font-family: 'Inter';
    font-size: 1.6rem;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;