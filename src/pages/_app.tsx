import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import globalTheme from '../../styles/GlobalStyles'
function MyApp({ Component, pageProps }: AppProps) {
  const theme = extendTheme(globalTheme)

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
