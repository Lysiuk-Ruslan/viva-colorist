import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`


  body {
  font-family: 'Inter', sans-serif;
  margin: 0;
  
  
}

a {
  text-decoration: none;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

ul {
  margin: 0;
  padding-left: 0;
  list-style-type: none;
}

address {
  font-style: normal;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

.container {
  @media screen and (min-width: 0px) and (max-width: 480px) {
    padding-left: 20px;
    padding-right: 20px;
    width: 480px;
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
    width: 768px;
  }

  @media screen and (min-width: 769px) and (max-width: 3000px) {
    padding-left: 160px;
    padding-right: 160px;
    width: 1920px;
  }
}

`;
