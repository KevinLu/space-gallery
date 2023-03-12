import Head from 'next/head';
import { Container } from '@chakra-ui/react';
import LayoutTemplate from '@/components/LayoutTemplate';
import Header from '@/components/Header';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';
import { fetchImagesByPage } from '@/pages/api/apod';
import type { HomeProps } from '@/typings/image';
import { SITE_BASE_URL, SITE_DESCRIPTION } from '@/constants';

// fetch the first few images on the server
export async function getStaticProps() {
  try {
    const res = await fetchImagesByPage(1);
    return { props: { images: res }, revalidate: 10 };
  } catch (error) {
    // NASA api error
    console.error(error);
    return { notFound: true };
  }
}

export default function Home({ images }: HomeProps) {
  // only two types, if it's not a video then it's an image
  const src =
    images[0].media_type === `video` ? images[0].thumbnail_url : images[0].url;

  return (
    <LayoutTemplate pt={8}>
      <Head>
        <title>Home - Space Gallery</title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <meta
          property="og:description"
          content={SITE_DESCRIPTION}
          key="description"
        />
        <meta property="og:title" content="Home - Space Gallery" key="title" />
        <meta property="og:type" content="website" key="type" />
        <meta property="og:site_name" content="Space Gallery" key="site_name" />
        <meta property="og:image" content={src} key="image" />
        <meta property="og:url" content={SITE_BASE_URL} key="url" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container as="main" maxW="100rem" mt={4}>
        <Header />
        <Gallery images={images} />
      </Container>

      <Footer />
    </LayoutTemplate>
  );
}
