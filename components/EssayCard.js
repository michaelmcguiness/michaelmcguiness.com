import React from "react";
import NextLink from "next/link";
import { useColorMode, Heading, Text, Link } from "@chakra-ui/core";
import { parseISO, format } from "date-fns";

import { secondaryTextColor, borderColor } from "../styles/colors";

const EssayCard = (frontMatter) => {
  const { publishedAt, tags, title, summary } = frontMatter;
  const { colorMode } = useColorMode();

  const slug = frontMatter.__resourcePath
    .replace("essays/", "")
    .replace(".mdx", "");

  return (
    <NextLink href={`essays/${slug}`} passHref>
      <Link
        marginY={1}
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
        <Text marginY={2} color={secondaryTextColor[colorMode]} fontSize="sm">
          {format(parseISO(publishedAt), "MMMM dd, yyyy")} {` • `}{" "}
          {tags.map((tag) => `#${tag} `)}
        </Text>
        <Text color={secondaryTextColor[colorMode]}>{summary}</Text>
      </Link>
    </NextLink>
  );
};

export default EssayCard;
