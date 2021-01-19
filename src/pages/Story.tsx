import { Box, Flex, Text, Image, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import { Layout } from '../components/Layout/Layout'
// import Image from 'next/image'
// import isDesktop from '../variables/responsive'
interface StoryProps {}

export const OurStory: React.FC<StoryProps> = () => {
  const [isDesktop] = useMediaQuery('(min-width: 768px)')
  return (
    <Layout title="Our Story">
      <Box align="center" border="1px solid black" p="4vw">
        <Text fontSize="5xl">Every idea needs a Sthlm_blog</Text>
      </Box>
      <Flex direction={{ sm: 'column', lg: 'row' }} w="100%" h="100%">
        <Box p="10" flex="1">
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
        <Box
          pos="relative"
          flex="1"
          bg="red.100"
          //   flex="1"
          //   style={{
          //     position: 'relative',
          //   }}
        >
          <Image
            // pos='absolute'
            // className=
            alt="Mountains"
            src="/img/earth.jpg"
            // layout="fill"
            objectFit="fill"
            pos="absolute"
            top="0"
            boxSize={`${isDesktop ? '100%' : 'inherit'}`}
            left="0"
          />
        </Box>
      </Flex>
    </Layout>
  )
}

export default OurStory
