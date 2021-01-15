/* eslint-disable @typescript-eslint/no-empty-interface */
import { Box } from '@chakra-ui/react'
import React from 'react'

interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <Box as="footer" bg="blue.300">
      <p>im footer</p>
    </Box>
  )
}
