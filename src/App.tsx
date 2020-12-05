import React from 'react';
import GlobalStyle from './styles/globalStyles';
import Router from './routes/index';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
