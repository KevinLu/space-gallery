import { Flex, BoxProps, useColorModeValue } from '@chakra-ui/react';

function LayoutTemplate({
  children,
  ...props
}: { children: React.ReactNode } & BoxProps) {
  const bg = useColorModeValue(`gray.50`, `gray.900`);

  return (
    <Flex
      flexDir="column"
      justifyContent="space-between"
      bg={bg}
      minH="100vh"
      {...props}
    >
      {children}
    </Flex>
  );
}

export default LayoutTemplate;
