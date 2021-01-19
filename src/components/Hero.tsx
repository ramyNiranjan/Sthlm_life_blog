import React from 'react'
import { Box, Button, Flex, Text } from '@chakra-ui/react'
import Link from 'next/link'
interface HeroProps {}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <Box p="4vw" bg="#FFD600">
      <Flex direction="row">
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys.{' '}
          <Link href="/Story">
            <b style={{ cursor: 'pointer' }}>Learn more</b>
          </Link>
        </Text>
      </Flex>
      <Flex mt="2" maxWidth="120px" direction="column">
        <Link href="/GettingStarted">
          <Button bg="black" color="white">
            Get started
          </Button>
        </Link>
      </Flex>
    </Box>
  )
}
