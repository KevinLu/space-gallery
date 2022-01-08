import {
  Img,
  ImgProps,
  Flex,
  Text,
  VStack,
  HStack,
  Icon,
  Divider,
  Button,
  ButtonGroup,
} from '@chakra-ui/react';
import MediaTypeTag from './MediaTypeTag';
import type { ImagePostProps } from '@/typings/image';
import {
  ArrowSquareOut,
  Calendar,
  ChatDots,
  Copyright,
  Share,
} from 'phosphor-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const MotionImg = motion<ImgProps>(Img);

function ImagePost({
  src,
  hdSrc,
  title,
  date,
  mediaType,
  description,
  copyright,
}: ImagePostProps) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <VStack as="article" borderWidth="1px" bg="white" p={4}>
      <MotionImg
        src={src}
        alt={title}
        initial={{ opacity: 0 }}
        animate={{
          opacity: isImageLoaded ? 1 : 0,
          scale: isImageLoaded ? 1 : 0.9,
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
          <HStack>
            <Text as="h2" fontSize="xl" fontWeight="semibold">
              {title}
            </Text>
            <MediaTypeTag mediaType={mediaType} />
          </HStack>
          <HStack>
            <Icon as={Calendar} boxSize="18px" color="gray.600" />
            {` `}
            <Text>{date}</Text>
          </HStack>
          <HStack>
            <Icon
              as={ChatDots}
              boxSize="18px"
              color="gray.600"
              alignSelf="flex-start"
              mt={1}
            />
            <Text>{description}</Text>
          </HStack>
          {copyright ? (
            <HStack>
              <Icon as={Copyright} color="gray.600" boxSize="18px" />
              <Text>{copyright}</Text>
            </HStack>
          ) : null}
        </VStack>
      </Flex>
      <Divider pt={2} />
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
          href={hdSrc}
          target="_blank"
          colorScheme="pink"
          leftIcon={<Icon as={ArrowSquareOut} />}
        >
          View source
        </Button>
        <Button leftIcon={<Icon as={Share} />}>Share this page</Button>
      </ButtonGroup>
    </VStack>
  );
}

export default ImagePost;
