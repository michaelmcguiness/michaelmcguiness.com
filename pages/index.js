import React, { useState } from 'react'
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Box,
  Button,
} from '@chakra-ui/core'
import quoteData from '../data/quotes'

import { blueBgColor, secondaryTextColor } from '../styles/colors'

import Container from '@components/Container'
import CustomLink from '@components/CustomLink'
import Subscribe from '@components/Subscribe'
import QuoteBox from '@components/QuoteBox'

const Index = () => {
  const { colorMode } = useColorMode()
  const [quoteIndex, setQuoteIndex] = useState(
    Math.floor(Math.random() * quoteData.length)
  )

  return (
    <Container>
      <Stack
        as="main"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <Heading letterSpacing="tight" mb={2} as="h1" size="xl">
            Hi, I'm Mike
          </Heading>
          <Text color={secondaryTextColor[colorMode]}>
            I’m a programmer, writer, and creator living in New York City. I
            write <CustomLink href="/essays">essays</CustomLink> on things I
            want to learn more about. Right now that's product management and
            startups. In the future, I hope to write about investing, computer
            science, longevity, and more. Follow me on{' '}
            <CustomLink href="https://twitter.com/m_mcguin">Twitter</CustomLink>{' '}
            for threads that summarize them.
          </Text>
        </Flex>
        <Subscribe />
        <Box>
          <Text letterSpacing="tight" my={4}>
            Just a random quote I like:
          </Text>
          <QuoteBox
            quote={quoteData[quoteIndex].quote}
            author={quoteData[quoteIndex].author}
          />
          <Button
            color="gray"
            onClick={() =>
              setQuoteIndex(Math.floor(Math.random() * quoteData.length))
            }
          >
            Generate Another
          </Button>
        </Box>
      </Stack>
    </Container>
  )
}

export default Index
