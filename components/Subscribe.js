import React, { useRef } from 'react'
import { blueBgColor, borderColor } from '../styles/colors'
import {
  useToast,
  useColorMode,
  Box,
  Heading,
  Text,
  InputGroup,
  Input,
  Button,
} from '@chakra-ui/core'

function isEmailValid(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

const Subscribe = () => {
  const inputEl = useRef(null)
  const toast = useToast()
  const { colorMode } = useColorMode()

  const subscribe = async (e) => {
    e.preventDefault()

    if (!isEmailValid(inputEl.current.value)) {
      toast({
        title: 'Please enter a valid email',
        description: error,
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
      return
    }

    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({ email: inputEl.current.value }),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
    })

    const { error } = await res.json()

    if (error) {
      toast({
        title: 'An error occurred.',
        description: error,
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
      return
    }

    inputEl.current.value = ''
    toast({
      title: 'Success!',
      description:
        "I sent you an email to confirm your address (check your junk folder if you don't see it after a minute).",
      status: 'success',
      duration: 10000,
      isClosable: true,
    })
  }

  return (
    <Box
      border="1px solid"
      borderColor={borderColor[colorMode]}
      bg={blueBgColor[colorMode]}
      borderRadius={4}
      padding={6}
      my={4}
      w="100%"
    >
      <Heading as="h5" size="lg" mb={2}>
        Subscribe to get essays by email
      </Heading>
      <Text>I'll only send emails when a new essay is posted. No spam.</Text>
      <form onSubmit={subscribe}>
        <InputGroup size="md" mt={4}>
          <Input
            aria-label="email for newsletter"
            placeholder="you@email.com"
            ref={inputEl}
            type="email"
          />
        </InputGroup>
        <Box w="100%" textAlign="right" mt={2}>
          <Button fontWeight="bold" onClick={subscribe}>
            Subscribe
          </Button>
        </Box>
      </form>
    </Box>
  )
}

export default Subscribe
