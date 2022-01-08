import { Center, Box, Icon, Text } from '@chakra-ui/react';
import { Planet } from 'phosphor-react';
import type { BlankImageCardProps } from '@/typings/image';

function BlankImageCard({ onClick }: BlankImageCardProps) {
  return (
    <Box
      onClick={onClick}
      as="article"
      cursor="pointer"
      minH="30rem"
      borderWidth="2px"
      borderStyle="dashed"
      p={4}
    >
      <Center flexDir="column" h="100%">
        <Icon as={Planet} color="gray.300" w={128} h={128} />
        <Text fontSize="2xl">Load more images</Text>
      </Center>
    </Box>
  );
}

export default BlankImageCard;
