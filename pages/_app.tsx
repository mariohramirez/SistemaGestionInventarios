import { useState } from 'react';
import '@styles/globals.css';
import type { AppProps } from 'next/app';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { SessionProvider } from 'next-auth/react';
import { LayoutContext } from 'contexts/LayoutContext';

const client = new ApolloClient({
  uri: '/api/graphql',
  cache: new InMemoryCache(),
});



export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {

  const [showMenu, setShowMenu] = useState(false);

  function updateShowMenu(showMenu: boolean) {    
    setShowMenu(showMenu);
  };

  return <>
    <SessionProvider session={session}>
      <ApolloProvider client={client}>
        <LayoutContext.Provider value={{ showLeftMenu: showMenu, setShowLeftMenu: updateShowMenu }}>
          <Component {...pageProps} />
        </LayoutContext.Provider>
      </ApolloProvider>
    </SessionProvider>
  </>
};
