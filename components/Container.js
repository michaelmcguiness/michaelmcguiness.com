import React from 'react'
import NextLink from 'next/link'
import { useColorMode, Button, Flex, Box, IconButton } from '@chakra-ui/core'
import styled from '@emotion/styled'
import { bgColor, primarytextColor, navBgColor } from '../styles/colors'

import Footer from './Footer'

const StickyNav = styled(Flex)`
  position: sticky;
  z-index: 10;
  top: 0;
  backdrop-filter: saturate(180%) blur(20px);
  transition: background-color 0.1 ease-in-out;
`

const Container = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
      <StickyNav
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        maxWidth="900px"
        width="100%"
        bg={navBgColor[colorMode]}
        as="nav"
        p={8}
        mt={[0, 8]}
        mb={8}
        mx="auto"
      >
        <IconButton
          aria-label="Toggle dark mode"
          icon={colorMode === 'dark' ? 'sun' : 'moon'}
          onClick={toggleColorMode}
        />
        <Box>
          <NextLink href="/essays" passHref>
            <Button as="a" variant="ghost" p={[1, 4]} mr={2}>
              Essays
            </Button>
          </NextLink>
          <NextLink href="/" passHref>
            <Button as="a" variant="ghost" p={[1, 4]}>
              Home
            </Button>
          </NextLink>
        </Box>
      </StickyNav>
      <Flex
        as="main"
        justifyContent="center"
        flexDirection="column"
        bg={bgColor[colorMode]}
        color={primarytextColor[colorMode]}
        px={8}
      >
        {children}
        <Footer />
      </Flex>
    </>
  )
}

export default Container
