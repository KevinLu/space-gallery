import { Flex, BoxProps } from '@chakra-ui/react';

function LayoutTemplate({
  children,
  ...props
}: { children: React.ReactNode } & BoxProps) {
  return (
    <Flex
      flexDir="column"
      justifyContent="space-between"
      bg="gray.50"
      minH="100vh"
      {...props}
    >
      {children}
    </Flex>
  );
}

export default LayoutTemplate;
