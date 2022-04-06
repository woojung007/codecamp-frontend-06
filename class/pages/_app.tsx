import 'antd/dist/antd.css';
// import "../styles/globals.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { AppProps } from "next/app";
import Layout from '../src/components/commons/layout/index';
import { Global } from '@emotion/react';
import { globalStyles } from '../src/commons/styles/globalStyles';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-d_kQQt5eRcb0OMNB1NJ3LfftoTDMPyk",
  authDomain: "site007-376c1.firebaseapp.com",
  projectId: "site007-376c1",
  storageBucket: "site007-376c1.appspot.com",
  messagingSenderId: "408619288042",
  appId: "1:408619288042:web:a107c4fb45f785affe1e93",
  measurementId: "G-W95V0840T7"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);




function MyApp({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: "http://backend06.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Global styles={globalStyles}/>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
