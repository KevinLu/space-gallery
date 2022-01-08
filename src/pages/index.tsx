import Head from 'next/head';
import LayoutTemplate from '@/components/LayoutTemplate';
import Header from '@/components/Header';
import Gallery from '@/components/Gallery';

export default function Home() {
  return (
    <LayoutTemplate px={4} py={8}>
      <Head>
        <title>Space Gallery</title>
        <meta
          name="description"
          content="View the finest photos from space, curated by NASA."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <Gallery />
      </main>
    </LayoutTemplate>
  );
}
