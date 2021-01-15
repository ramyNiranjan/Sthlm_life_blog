import React from 'react'
import {
  Flex,
  // chakra,
  Box,
  Button,
  // useDisclosure,
  // useMediaQuery,
} from '@chakra-ui/react'
import Link from 'next/link'
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
      <Box as="nav">
        <Box as="ul">
          <Link href="/Story">Our Story</Link>
          <Button ml="10">Get started</Button>
        </Box>
      </Box>
    </Flex>
  )
}
