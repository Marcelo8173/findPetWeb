import React from 'react';
import GlobalStyle from './styles/globalStyles';
import Router from './routes/index';
import FollowingProvider from './hooks/index';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <FollowingProvider>
        <Router />
      </FollowingProvider>
    </>
  );
}

export default App;
