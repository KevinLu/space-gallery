import { Box, Heading, Text, Link, Icon } from '@chakra-ui/react';
import { ArrowSquareOut } from 'phosphor-react';

function Header() {
  return (
    <Box as="header" textAlign="center" mb={8}>
      <Heading as="h1" mb={2}>
        Space Gallery
      </Heading>
      <Text fontSize="xl">
        The finest collection of space imagery, curated by NASA&apos;s{` `}
        <Link
          href="https://apod.nasa.gov/apod/astropix.html"
          isExternal
          color="pink.600"
        >
          Astronomy Picture of the Day
          <Icon as={ArrowSquareOut} ml={1} />
        </Link>
        .
      </Text>
    </Box>
  );
}

export default Header;
