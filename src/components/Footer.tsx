import {
  Box,
  HStack,
  Heading,
  IconButton,
  Button,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { GithubLogo, SunDim, Moon } from 'phosphor-react';

function Footer() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isLight = colorMode === `light`;
  const bg = useColorModeValue(`white`, `gray.800`);

  return (
    <Box as="footer" role="contentinfo" mt={8} px={4} py={4} bg={bg}>
      <HStack spacing={4} justifyContent="space-between">
        <NextLink href="/" passHref>
          <Heading
            as="a"
            aria-label="Space Gallery"
            size="md"
            fontWeight="semibold"
          >
            Space Gallery
          </Heading>
        </NextLink>
        <HStack spacing={4}>
          <Button
            onClick={toggleColorMode}
            leftIcon={isLight ? <Moon size={20} /> : <SunDim size={20} />}
          >
            Toggle {isLight ? `Dark` : `Light`}
          </Button>
          <IconButton
            as="a"
            aria-label="GitHub link"
            href="https://github.com/KevinLu/space-gallery"
            target="_blank"
            icon={<GithubLogo weight="fill" size={24} />}
          />
        </HStack>
      </HStack>
    </Box>
  );
}

export default Footer;
