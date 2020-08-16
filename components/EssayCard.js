import React from "react";
import NextLink from "next/link";
import { useColorMode, Heading, Text, Link } from "@chakra-ui/core";

import { secondaryTextColor, borderColor } from "../styles/colors";

const EssayCard = (frontMatter) => {
  const { title, summary } = frontMatter;
  const { colorMode } = useColorMode();

  const slug = frontMatter.__resourcePath
    .replace("essays/", "")
    .replace(".mdx", "");

  return (
    <NextLink href={`essays/${slug}`} passHref>
      <Link
        m={1}
        w="100%"
        _hover={{
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
          textDecoration: "none",
        }}
        border="1px solid"
        borderColor={borderColor[colorMode]}
        borderRadius={4}
        p={4}
      >
        <Heading size="md" as="h3" fontWeight="medium">
          {title}
        </Heading>
        <Text color={secondaryTextColor[colorMode]}>{summary}</Text>
      </Link>
    </NextLink>
  );
};

export default EssayCard;
