import { Icon, Button, ButtonGroup, useClipboard } from '@chakra-ui/react';
import { ArrowSquareOut, Share } from 'phosphor-react';

function PostActions({ src }: { src: string }) {
  const urlToCopy = typeof window !== `undefined` ? location.href : src;
  const { hasCopied, onCopy } = useClipboard(urlToCopy);

  return (
    <ButtonGroup
      variant="link"
      size="lg"
      flexWrap="wrap"
      justifyContent="center"
      spacing={8}
      py={2}
    >
      <Button
        as="a"
        href={src}
        target="_blank"
        colorScheme="pink"
        leftIcon={<Icon as={ArrowSquareOut} />}
      >
        View source
      </Button>
      <Button onClick={onCopy} leftIcon={<Icon as={Share} />}>
        {hasCopied ? `Copied to clipboard!` : `Share this page`}
      </Button>
    </ButtonGroup>
  );
}

export default PostActions;
