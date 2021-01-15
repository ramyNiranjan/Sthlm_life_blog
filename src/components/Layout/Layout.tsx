import React from 'react'
import { Flex, Box } from '@chakra-ui/react'
import { Header } from './Header/Header'
import Head from 'next/head'
import { Footer } from './Footer'

interface LayoutProps {
  children: any
  title: string
}

export const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  return (
    <Flex direction="column" minH="100vh">
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <Box as="main" flexGrow={1} w="100%">
        {children}
      </Box>
      <Footer />
    </Flex>
  )
}
