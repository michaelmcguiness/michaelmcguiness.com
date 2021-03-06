import React from "react";
import { Flex, Link, IconButton } from "@chakra-ui/core";

const Footer = () => (
  <Flex align="center" mb={4} direction="column">
    <div>
      <Link href="https://twitter.com/mikemcg0" title="Twitter" isExternal>
        <IconButton
          aria-label="Twitter"
          icon="twitter"
          size="lg"
          color="gray.500"
          variant="ghost"
          m={1}
        />
      </Link>
      <Link
        href="https://github.com/michaelmcguiness"
        title="GitHub"
        isExternal
      >
        <IconButton
          aria-label="GitHub"
          icon="github"
          size="lg"
          color="gray.500"
          variant="ghost"
          m={1}
        />
      </Link>
      <Link
        href="https://www.linkedin.com/in/mmcguiness/"
        title="LinkedIn"
        isExternal
      >
        <IconButton
          aria-label="LinkedIn"
          icon="linkedin"
          size="lg"
          color="gray.500"
          variant="ghost"
          m={1}
        />
      </Link>
      <Link href="mailto:mike@michaelmcguiness.com" title="Email" isExternal>
        <IconButton
          aria-label="Email"
          icon="mail"
          size="lg"
          color="gray.500"
          variant="ghost"
          m={1}
        />
      </Link>
    </div>
  </Flex>
);

export default Footer;
