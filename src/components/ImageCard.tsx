import {
  Image,
  ImageProps,
  Box,
  Flex,
  Text,
  IconButton,
  IconButtonProps,
  VStack,
  Tag,
  TagLeftIcon,
  TagLabel,
} from '@chakra-ui/react';
import type { ImageCardProps } from '@/typings/image';
import { Heart, ImageSquare, YoutubeLogo } from 'phosphor-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const MotionImage = motion<ImageProps>(Image);
const MotionIconButton = motion<IconButtonProps>(IconButton);

function ImageCard({
  src,
  title,
  date,
  mediaType,
  isLiked,
  likeImage,
}: ImageCardProps) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <Flex
      as="article"
      flexDir="column"
      justifyContent="space-between"
      borderWidth="1px"
      bg="white"
      p={4}
    >
      <MotionImage
        src={src}
        alt={title}
        initial={{ opacity: 0 }}
        animate={{
          opacity: isImageLoaded ? 1 : 0,
        }}
        onLoad={() => setIsImageLoaded(true)}
        borderRadius="md"
        flexGrow={1}
        minH="30rem"
        w="100%"
        objectFit="cover"
      />
      <Flex mt={2} alignItems="center" justifyContent="space-between">
        <VStack justifyContent="space-between" alignItems="flex-start">
          <Text
            as="h2"
            fontSize="xl"
            fontWeight="semibold"
            lineHeight="shorter"
          >
            {title}
          </Text>
          <Text>{date}</Text>
          <Tag colorScheme={mediaType === `image` ? `pink` : `teal`}>
            <TagLeftIcon
              boxSize="16px"
              as={mediaType === `image` ? ImageSquare : YoutubeLogo}
            />
            <TagLabel textTransform="capitalize">{mediaType}</TagLabel>
          </Tag>
        </VStack>
        <MotionIconButton
          aria-label="Like image"
          icon={<Heart weight={isLiked ? `fill` : `regular`} size="2rem" />}
          whileTap={{ scale: 0.8 }}
          variant="unstyled"
          display="flex"
          color={isLiked ? `red.500` : `gray.500`}
          onClick={() => likeImage(title)}
        />
      </Flex>
    </Flex>
  );
}

export default ImageCard;
