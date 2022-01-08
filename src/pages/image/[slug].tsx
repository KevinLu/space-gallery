import { useRouter } from 'next/router';
import Head from 'next/head';
import { Skeleton, Container } from '@chakra-ui/react';
import GetAPOD from '@/api/apod';
import type { ImagePageProps } from '@/typings/image';
import LayoutTemplate from '@/components/LayoutTemplate';
import ImagePost from '@/components/ImagePost';
import BackHeader from '@/components/BackHeader';

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticPaths() {
  return { paths: [], fallback: true };
}

export async function getStaticProps({ params }: Params) {
  const { slug } = params;

  try {
    const image = await GetAPOD({ date: slug, thumbs: true });
    return image.data ? { props: { image: image.data } } : { notFound: true };
  } catch (error) {
    // NASA api error
    console.error(error);
    return { notFound: true };
  }
}

function Image({ image }: ImagePageProps) {
  const { isFallback } = useRouter();

  return (
    <LayoutTemplate py={4}>
      <Head>
        <title>{image?.title} - Space Gallery</title>
        <meta
          name="description"
          content="View the finest photos from space, curated by NASA."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BackHeader />
      <Container as="main" maxW={{ lg: `container.lg` }}>
        {isFallback ? (
          <Skeleton minH="38rem" />
        ) : (
          <ImagePost
            src={image.media_type === `video` ? image.thumbnail_url : image.url}
            title={image.title}
            description={image.explanation}
            date={image.date}
            mediaType={image.media_type}
            copyright={image.copyright}
          />
        )}
      </Container>
    </LayoutTemplate>
  );
}

export default Image;
