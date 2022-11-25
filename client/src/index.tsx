import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import theme from './SetUp/StyleThemeSettings/Setting';
import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { CssBaseline } from '@mui/material';
import { StateValueProvider } from 'Common/ContextApi';
import { ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import {createUploadLink} from 'apollo-upload-client'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

export const MuiCache = createCache({
  key :"mui",
  prepend : true
});

const client = new ApolloClient({
  link : createUploadLink({
    uri : "http://localhost:4000/graphql",
    credentials : "include"
  }),
  cache : new InMemoryCache()
})
root.render(

  // <React.StrictMode>
  <ApolloProvider client={client}>  
      <StateValueProvider > 
            <CacheProvider value={MuiCache} >  
              <ThemeProvider theme={theme} >  
              <  CssBaseline />
                    <App />
              </ThemeProvider> 
            </CacheProvider>
      </StateValueProvider>
   </ApolloProvider>
  /* </React.StrictMode> */
);
