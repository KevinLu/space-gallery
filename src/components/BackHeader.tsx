import NextLink from 'next/link';
import { ArrowLeft } from 'phosphor-react';
import { Button, Icon } from '@chakra-ui/react';

function BackHeader() {
  return (
    <NextLink href="/" passHref>
      <Button
        as="a"
        aria-label="Go back to gallery"
        leftIcon={<Icon as={ArrowLeft} mr={2} color="gray.800" />}
        variant="unstyled"
        size="lg"
        display="flex"
        p={4}
      >
        Back to gallery
      </Button>
    </NextLink>
  );
}

export default BackHeader;
