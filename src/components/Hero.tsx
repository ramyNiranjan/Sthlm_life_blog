/* eslint-disable @typescript-eslint/no-empty-interface */
import React from 'react'
import { Box } from '@chakra-ui/react'
import Link from 'next/link'
interface HeroProps {}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <Box bg="yellow.200">
      <Box>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys.
        </p>
      </Box>
      <Link href="/ourStory">Learn More</Link>
    </Box>
  )
}
