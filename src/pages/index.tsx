import Head from 'next/head';
import Header from '@/components/Header';
import Gallery from '@/components/Gallery';

export default function Home() {
  return (
    <div>
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
    </div>
  );
}
