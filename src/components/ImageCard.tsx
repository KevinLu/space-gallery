import { Image, Box, Flex, Heading, Text, IconButton } from '@chakra-ui/react';
import { ImageCardProps } from '@/typings/image';
import { StarIcon } from '@chakra-ui/icons';

function ImageCard({ src, title, date }: ImageCardProps) {
  return (
    <Box as="article" borderRadius="base" dropShadow="base">
      <Image src={src} alt={title} h="30rem" w="100%" objectFit="cover" />
      <Flex mt={2} alignItems="center" justifyContent="space-between">
        <Flex flexDir="column">
          <Heading as="h2" size="md">
            {title}
          </Heading>
          <Text>{date}</Text>
        </Flex>
        <IconButton
          aria-label="Like image"
          icon={<StarIcon />}
          variant="ghost"
        />
      </Flex>
    </Box>
  );
}

export default ImageCard;
