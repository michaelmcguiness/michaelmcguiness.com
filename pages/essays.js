import React, { useState } from "react";
import { NextSeo } from "next-seo";
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Input,
  InputGroup,
  InputRightElement,
  Icon,
} from "@chakra-ui/core";

import { secondaryTextColor } from "../styles/colors";
import { frontMatter as essays } from "./essays/*.mdx";

import Container from "@components/Container";
import EssayCard from "@components/EssayCard";
import Subscribe from "@components/Subscribe";

const url = "https://michaelmcguiness.com/essays";
const title = "Essays - Michael McGuiness";
const description = "A growing directory of my thoughts on various subjects.";

const Essays = () => {
  const [searchValue, setSearchValue] = useState("");
  const { colorMode } = useColorMode();

  const filteredEssays = essays
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .filter((frontMatter) =>
      frontMatter.title.toLowerCase().includes(searchValue.toLowerCase())
    );

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{ url, title, description }}
      />
      <Container>
        <Stack
          as="main"
          spacing={8}
          justifyContent="center"
          alignItems="flex-start"
          m="0 auto 4rem auto"
          width="100%"
          maxWidth="700px"
        >
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            width="100%"
          >
            <Heading letterSpacing="tight" mb={4} as="h1" size="2xl">
              Essays
            </Heading>
            <Text color={secondaryTextColor[colorMode]}>
              {`Use the search below to filter by title.`}
            </Text>
            <InputGroup my={2} mr={4} w="100%" maxWidth="400px">
              <Input
                aria-label="Search articles"
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search essays"
              />
              <InputRightElement>
                <Icon name="search" color="gray.300" />
              </InputRightElement>
            </InputGroup>
          </Flex>
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            width="100%"
          >
            {!filteredEssays.length && "No essays found"}
            {filteredEssays.map((frontMatter) => (
              <EssayCard key={frontMatter.title} {...frontMatter} />
            ))}
          </Flex>
          <Subscribe />
        </Stack>
      </Container>
    </>
  );
};

export default Essays;
