import React, { useState } from "react";
import { useColorMode, Heading, Text, Flex, Stack } from "@chakra-ui/core";
import quoteData from "../data/quotes";

import { secondaryTextColor } from "../styles/colors";

import Container from "@components/Container";
import CustomLink from "@components/CustomLink";
import Subscribe from "@components/Subscribe";

const Index = () => {
  const { colorMode } = useColorMode();
  const [quoteIndex, setQuoteIndex] = useState(
    Math.floor(Math.random() * quoteData.length)
  );

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
            I'm an engineer at{" "}
            <CustomLink href="https://commonstock.com/v2/">
              Commonstock
            </CustomLink>
            , and I write <CustomLink href="/essays">essays</CustomLink> on
            variety of topics when I can find the time. That's not too often,
            but if you want to be notified when a new one comes out, enter your
            email below. Future essays will likely pertain to company building,
            programming, crypto, investing and technology. You can also follow
            me on{" "}
            <CustomLink href="https://twitter.com/mikemcg0">Twitter</CustomLink>{" "}
            and Commonstock for threads/memos that summarize them.
          </Text>
        </Flex>
        <Subscribe />
      </Stack>
    </Container>
  );
};

export default Index;
