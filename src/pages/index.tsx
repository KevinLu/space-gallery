import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import Header from '@/components/Header';
import Gallery from '@/components/Gallery';

export default function Home() {
  return (
    <Box bg="gray.50" py={8} px={4} minH="100vh">
      <Head>
        <title>Space Gallery</title>
        <meta
          name="description"
          content="View the finest photos from space, curated by NASA."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box as="main">
        <Header />
        <Gallery />
      </Box>
    </Box>
  );
}
