import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  outline: 0;
}

html, body {
  height: 100%;
}

#__next {
  display: flex;
  height: 100%;
}

div, section {
  display: flex;
}

a {
  text-decoration: none;
  color: black;

  ::visited {
    color: black;
  }
}

body {
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
}


*,
*::before,
*::after {
  box-sizing: inherit;
}
`;

export default GlobalStyles;
