import { useState } from 'react';
import { LayoutContext } from 'contexts/LayoutContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '@styles/globals.css';
import type { AppProps } from 'next/app';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { SessionProvider } from 'next-auth/react';

const client = new ApolloClient({
  uri: '/api/graphql',
  cache: new InMemoryCache(),
});

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  const [showMenu, setShowMenu] = useState(false);

  function updateShowMenu(showMenu: boolean) {
    setShowMenu(showMenu);
  }

  return (
    <>
      <SessionProvider session={session}>
        <ApolloProvider client={client}>
          <LayoutContext.Provider
            value={{ showLeftMenu: showMenu, setShowLeftMenu: updateShowMenu }}
          >
            <Component {...pageProps} />
            <ToastContainer />
          </LayoutContext.Provider>
        </ApolloProvider>
      </SessionProvider>
    </>
  );
};

export default App;
