import { Center, Spinner } from '@chakra-ui/react';

const LoadingIndicator = () => {
  return (
    <Center mt="10vh">
      <Spinner thickness="4px" speed="0.65s" color="pink.500" size="xl" />
    </Center>
  );
};

export default LoadingIndicator;
