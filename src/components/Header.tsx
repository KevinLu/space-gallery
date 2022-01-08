import { Box, Heading, Text } from '@chakra-ui/react';

function Header() {
  return (
    <Box as="header" textAlign="center" my={4}>
      <Heading as="h1">Space Gallery</Heading>
      <Text fontSize="xl">
        The finest collection of space imagery, curated by NASA&apos;s Astronomy
        Picture of the Day.
      </Text>
    </Box>
  );
}

export default Header;
