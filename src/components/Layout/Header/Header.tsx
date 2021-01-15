import React from 'react'
import {
  Flex,
  // chakra,
  Box,
  Button,
  // useDisclosure,
  // useMediaQuery,
} from '@chakra-ui/react'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <Flex
      borderBottom="1px solid black"
      justify="space-between"
      p="5"
      align="center"
      w="100%"
    >
      <Box>Shtlm_blog</Box>
      <Button>Get started</Button>
    </Flex>
  )
}
