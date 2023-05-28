import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '@styles/globals.css';
import type { AppProps } from 'next/app';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { SessionProvider } from 'next-auth/react';
import { ModalsContextProvider } from 'contexts/ModalsContextProvider';
import { SidebarContextProvider } from 'contexts/LayoutContext';

const client = new ApolloClient({
  uri: '/api/graphql',
  cache: new InMemoryCache(),
});

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => (
  <>
    <SessionProvider session={session}>
      <ApolloProvider client={client}>
        <ModalsContextProvider>
          <SidebarContextProvider>
            <Component {...pageProps} />
            <ToastContainer />
          </SidebarContextProvider>
        </ModalsContextProvider>
      </ApolloProvider>
    </SessionProvider>
  </>
);

export default App;
