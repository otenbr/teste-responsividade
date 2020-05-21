import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body {
  background-color: #E5E5E5;
  color: rgba(0, 0, 0, 0.7);;
  font-family: 'Roboto', sans-serif;
}

a {
  text-decoration: none;
}

button {
  cursor: pointer;
}
`;
