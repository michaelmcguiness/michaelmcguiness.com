import React from 'react'
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Link,
  Box,
} from '@chakra-ui/core'
import { parseISO, format } from 'date-fns'

import { secondaryTextColor } from '../styles/colors'
import Container from '@components/Container'
import EssaySEO from '@components/EssaySEO'
import Subscribe from '@components/Subscribe'

const editUrl = (slug) =>
  `https://github.com/michaelmcguiness/michaelmcguiness.com/edit/master/pages/essays/${slug}.mdx`
const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `https://michaelmcguiness.com/essays/${slug}`
  )}`

const Index = (frontMatter) => {
  const slug = frontMatter.__resourcePath
    .replace('essays/', '')
    .replace('.mdx', '')

  return ({ children }) => {
    const colorMode = useColorMode()

    return (
      <Container>
        <EssaySEO
          url={`https://michaelmcguiness.com/essays/${slug}`}
          {...frontMatter}
        />
        <Stack
          as="article"
          spacing={8}
          justifyContent="center"
          alignItems="flex-start"
          m="0 auto 4rem auto"
          maxWidth="700px"
          w="100%"
        >
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
            w="100%"
          >
            <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
              {frontMatter.title}
            </Heading>
            <Flex
              justify="space-between"
              align={['initial', 'center']}
              direction={['column', 'row']}
              mt={2}
              w="100%"
              mb={4}
            >
              <Text fontSize="sm" color={secondaryTextColor[colorMode]}>
                {'Michael McGuiness • '}
                {format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')}
              </Text>
              <Text fontSize="sm" color="gray.500" minWidth="100px" mt={[2, 0]}>
                {frontMatter.readingTime.text}
              </Text>
            </Flex>
          </Flex>
          {children}
          <Subscribe />
          <Box>
            <Link href={discussUrl(slug)} isExternal>
              {'Discuss on Twitter'}
            </Link>
            {` • `}
            <Link href={editUrl(slug)} isExternal>
              {'Edit on GitHub'}
            </Link>
          </Box>
        </Stack>
      </Container>
    )
  }
}

export default Index
