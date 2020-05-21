import React from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import GlobalStyle from './styles/global';

import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <>
      <Home />
      <GlobalStyle />
      <ToastContainer style={{ zIndex: 10003 }} />
    </>
  );
};

export default App;
