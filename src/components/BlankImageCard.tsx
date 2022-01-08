import { CenterProps, Center, Box, Icon, Text } from '@chakra-ui/react';
import { Planet } from 'phosphor-react';
import type { BlankImageCardProps } from '@/typings/image';
import { motion } from 'framer-motion';

const MotionCenter = motion<CenterProps>(Center);

function BlankImageCard({ onClick }: BlankImageCardProps) {
  return (
    <Box
      onClick={onClick}
      as="article"
      cursor="pointer"
      minH="38rem"
      borderWidth="2px"
      borderStyle="dashed"
      bg="white"
      p={4}
    >
      <MotionCenter flexDir="column" h="100%" whileHover={{ scale: 1.1 }}>
        <Icon as={Planet} color="gray.300" w={128} h={128} />
        <Text fontSize="2xl">Load more images</Text>
      </MotionCenter>
    </Box>
  );
}

export default BlankImageCard;
