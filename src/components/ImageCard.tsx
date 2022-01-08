import {
  Box,
  BoxProps,
  Image,
  ImageProps,
  Flex,
  Text,
  IconButton,
  IconButtonProps,
  VStack,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import type { ImageCardProps } from '@/typings/image';
import { Heart } from 'phosphor-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import MediaTypeTag from './MediaTypeTag';

const MotionBox = motion<BoxProps>(Box);
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
      <NextLink href={`/image/${date}`} passHref>
        <a>
          <MotionBox
            borderRadius="md"
            whileHover={{ scale: 1.02 }}
            overflow="hidden"
          >
            <MotionImage
              src={src}
              alt={title}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{
                opacity: isImageLoaded ? 1 : 0,
                scale: isImageLoaded ? 1.05 : 1,
              }}
              whileHover={{ scale: 1 }}
              borderRadius="md"
              onLoad={() => setIsImageLoaded(true)}
              flexGrow={1}
              minH="30rem"
              w="100%"
              objectFit="cover"
            />
          </MotionBox>
        </a>
      </NextLink>
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
          <MediaTypeTag mediaType={mediaType} />
        </VStack>
        <MotionIconButton
          aria-label="Like image"
          icon={<Heart weight={isLiked ? `fill` : `regular`} size="32px" />}
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
