import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import globalTheme from '../../styles/GlobalStyles'
import UserContextProvider from '../contexts/UserContext'

function MyApp({ Component, pageProps }: AppProps) {
  const theme = extendTheme(globalTheme)
  return (
    <UserContextProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </UserContextProvider>
  )
}

export default MyApp
