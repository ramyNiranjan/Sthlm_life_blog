import { Box } from '@chakra-ui/react'
import React from 'react'
import { Layout } from '../components/Layout/Layout'

interface StoryProps {}

export const OurStory: React.FC<StoryProps> = () => {
  return (
    <Layout title="Our Story">
      <Box as="h1">Our Story</Box>
    </Layout>
  )
}

export default OurStory
