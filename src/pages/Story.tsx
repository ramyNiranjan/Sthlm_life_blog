import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { Layout } from '../components/Layout/Layout'
import Image from 'next/image'

interface StoryProps {}

export const OurStory: React.FC<StoryProps> = () => {
  return (
    <Layout title="Our Story">
      <Box align="center" border="1px solid black" p="4vw">
        <Text fontSize="5xl">Every idea needs a Sthlm_blog</Text>
      </Box>
      <Flex>
        <Box p="4vw">
          <Text fontSize="3xl">What is Lorem Ipsum?</Text>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industrys standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industrys standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </Text>
        </Box>
        <Box>
          <Image
            src="/me.png"
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </Box>
      </Flex>
    </Layout>
  )
}

export default OurStory
