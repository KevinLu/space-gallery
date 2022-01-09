import { Box, HStack, Heading, IconButton } from '@chakra-ui/react';
import { GithubLogo } from 'phosphor-react';

function Footer() {
  return (
    <Box as="footer" role="contentinfo" mt={8} px={4} py={4} bg="white">
      <HStack spacing={4} justifyContent="space-between">
        <Heading size="md" fontWeight="semibold">
          Space Gallery
        </Heading>
        <IconButton
          as="a"
          aria-label="GitHub link"
          href="https://github.com/KevinLu/space-gallery"
          target="_blank"
          icon={<GithubLogo weight="fill" size={24} />}
        />
      </HStack>
    </Box>
  );
}

export default Footer;
