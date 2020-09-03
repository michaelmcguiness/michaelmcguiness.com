import React from 'react'
import { useColorMode, Text, Flex } from '@chakra-ui/core'
import { primarytextColor, borderColor } from '../styles/colors'

const QuoteBox = ({ quote, author }) => {
  const { colorMode } = useColorMode()

  return (
    <Flex
      border="1px solid"
      borderColor={borderColor[colorMode]}
      borderRadius={4}
      p={4}
      mb={2}
    >
      <Text as="i" color={primarytextColor[colorMode]}>
        "{quote}" - <strong>{author}</strong>
      </Text>
    </Flex>
  )
}

export default QuoteBox
