import {
  Image,
  ImageProps,
  Box,
  Flex,
  Text,
  IconButton,
} from '@chakra-ui/react';
import type { ImageCardProps } from '@/typings/image';
import { Heart } from 'phosphor-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const MotionImage = motion<ImageProps>(Image);

function ImageCard({ src, title, date, isLiked, likeImage }: ImageCardProps) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <Box as="article" borderWidth="1px" bg="white" p={4}>
      <MotionImage
        src={src}
        alt={title}
        initial={{ opacity: 0 }}
        animate={{
          opacity: isImageLoaded ? 1 : 0,
        }}
        onLoad={() => setIsImageLoaded(true)}
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
