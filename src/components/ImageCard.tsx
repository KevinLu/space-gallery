import { Image, Box, Flex, Text, IconButton } from '@chakra-ui/react';
import type { ImageCardProps } from '@/typings/image';
import { Heart } from 'phosphor-react';

function ImageCard({ src, title, date, isLiked, likeImage }: ImageCardProps) {
  return (
    <Box as="article" borderWidth="1px" p={4}>
      <Image
        src={src}
        alt={title}
        borderRadius="md"
        h="30rem"
        w="100%"
        objectFit="cover"
      />
      <Flex mt={2} alignItems="center" justifyContent="space-between">
        <Flex flexDir="column">
          <Text as="h2" fontSize="xl" fontWeight="semibold" lineHeight="short">
            {title}
          </Text>
          <Text>{date}</Text>
        </Flex>
        <IconButton
          aria-label="Like image"
          icon={<Heart weight={isLiked ? `fill` : `regular`} size="24px" />}
          variant="ghost"
          color={isLiked ? `red.500` : `gray.500`}
          onClick={() => likeImage(title)}
        />
      </Flex>
    </Box>
  );
}

export default ImageCard;
