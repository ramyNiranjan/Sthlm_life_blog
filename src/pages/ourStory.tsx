import { Box } from '@chakra-ui/react'
import React from 'react'
import { Layout } from '../components/Layout/Layout'

interface OurStoryProps {}

export const OurStory: React.FC<OurStoryProps> = ({}) => {
  return (
    <Layout>
      <Box as="h1">our story</Box>
    </Layout>
  )
}

export default OurStory
