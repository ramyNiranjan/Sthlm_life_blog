import { Box } from '@chakra-ui/react'
import React from 'react'
import { Layout } from '../components/Layout/Layout'

interface StoryProps {}

export const OurStory: React.FC<StoryProps> = () => {
  return (
    <Layout title="Our story">
      <Box as="h1">our story</Box>
    </Layout>
  )
}

export default OurStory
