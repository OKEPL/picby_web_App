import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { cache } from '../cache'

import theme from '../theme'

const client = new ApolloClient({
  uri: 'http://localhost:8090/graphql',
  credentials: "include",
  cache 
})

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <Component {...pageProps} />
      </ColorModeProvider>
    </ThemeProvider>
  )
}

export default MyApp
