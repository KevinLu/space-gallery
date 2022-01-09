import {
  CenterProps,
  Center,
  Box,
  Icon,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { Planet } from 'phosphor-react';
import type { BlankImageCardProps } from '@/typings/image';
import { motion } from 'framer-motion';

const MotionCenter = motion<CenterProps>(Center);

function BlankImageCard({ onClick }: BlankImageCardProps) {
  const bg = useColorModeValue(`white`, `gray.800`);
  const iconColor = useColorModeValue(`gray.300`, `gray.500`);

  return (
    <Box
      onClick={onClick}
      cursor="pointer"
      minH="38rem"
      borderWidth="2px"
      borderStyle="dashed"
      bg={bg}
      p={4}
      overflow="hidden"
    >
      <MotionCenter flexDir="column" h="100%" whileHover={{ scale: 1.1 }}>
        <Icon as={Planet} color={iconColor} w={128} h={128} />
        <Text fontSize="2xl">Load more images</Text>
      </MotionCenter>
    </Box>
  );
}

export default BlankImageCard;
