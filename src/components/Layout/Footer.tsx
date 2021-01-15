import { Box } from '@chakra-ui/react'
import React from 'react'

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <Box as="footer" bg="blue.300">
      <p>i'm footer</p>
    </Box>
  )
}
