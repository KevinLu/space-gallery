import NextLink from 'next/link';
import { ArrowLeft } from 'phosphor-react';
import { Button, Icon, HStack } from '@chakra-ui/react';

function BackHeader() {
  return (
    <HStack>
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
    </HStack>
  );
}

export default BackHeader;
