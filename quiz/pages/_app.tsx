import 'antd/dist/antd.css';
// import '../styles/globals.css'
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client'
import { globalStyles } from '../src/commons/styles/globalStyles';
import { Global } from '@emotion/react';
import Layout from '../src/components/commons/layout/index';
import { AppProps } from 'next/app';


function MyApp({ Component, pageProps }: AppProps) {

  const client = new ApolloClient({
    uri : "http://backend06.codebootcamp.co.kr/graphql",
    cache : new InMemoryCache()
  })



  return( 
    <ApolloProvider client={client}>
      <Global styles={globalStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
    </ApolloProvider>

  )
}

export default MyApp;
