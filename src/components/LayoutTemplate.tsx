import { Box, BoxProps } from '@chakra-ui/react';

function LayoutTemplate({
  children,
  ...props
}: { children: React.ReactNode } & BoxProps) {
  return (
    <Box bg="gray.50" minH="100vh" {...props}>
      {children}
    </Box>
  );
}

export default LayoutTemplate;
