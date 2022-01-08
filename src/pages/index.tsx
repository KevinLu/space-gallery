import Head from 'next/head';
import LayoutTemplate from '@/components/LayoutTemplate';
import Header from '@/components/Header';
import Gallery from '@/components/Gallery';

export default function Home() {
  return (
    <LayoutTemplate px={4} py={8}>
      <Head>
        <title>Home - Space Gallery</title>
        <meta
          name="description"
          content="View the finest photos from space, curated by NASA."
        />
        <meta property="og:title" content="Home - Space Gallery" key="title" />
        <meta property="og:type" content="website" key="type" />
        <meta property="og:site_name" content="Space Gallery" key="site_name" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <Gallery />
      </main>
    </LayoutTemplate>
  );
}
