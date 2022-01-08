import Head from 'next/head';
import LayoutTemplate from '@/components/LayoutTemplate';
import Header from '@/components/Header';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';
import { fetchImagesByPage } from '@/api/apod';
import type { HomeProps } from '@/typings/image';

export async function getStaticProps() {
  try {
    const res = await fetchImagesByPage(1);
    return { props: { images: res } };
  } catch (error) {
    // NASA api error
    console.error(error);
    return { notFound: true };
  }
}

export default function Home({ images }: HomeProps) {
  return (
    <LayoutTemplate px={4} pt={8}>
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
        <Gallery images={images} />
      </main>

      <Footer />
    </LayoutTemplate>
  );
}
