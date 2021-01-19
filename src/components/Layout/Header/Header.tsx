import React from 'react'
import {
  Flex,
  // chakra,
  Box,
  Button,
  useMediaQuery,
} from '@chakra-ui/react'
import Link from 'next/link'
interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  const [isDesktop] = useMediaQuery('(min-width: 768px)')

  return (
    <Flex
      borderBottom="1px solid black"
      bg="#FFD600"
      justify="space-between"
      p="5"
      align="center"
      w="100%"
    >
      <Box>Shtlm_blog</Box>
      <Box as="nav">
        <Box as="ul">
          {isDesktop && (
            <Link href="/Story">
              <b style={{ cursor: 'pointer' }}>Our Story</b>
            </Link>
          )}

          <Link href="/GettingStarted">
            <Button bg="black" color="white" ml="10">
              Get started
            </Button>
          </Link>
        </Box>
      </Box>
    </Flex>
  )
}
