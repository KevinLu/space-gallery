import { useRouter } from 'next/router';
import Head from 'next/head';
import { Container } from '@chakra-ui/react';
import { GetAPOD } from '@/pages/api/apod';
import type { ImagePageProps } from '@/typings/image';
import { SITE_BASE_URL, SITE_DESCRIPTION } from '@/constants';
import LayoutTemplate from '@/components/LayoutTemplate';
import ImagePost from '@/components/ImagePost';
import BackHeader from '@/components/BackHeader';
import LoadingIndicator from '@/components/LoadingIndicator';
import Footer from '@/components/Footer';
import formatTitle from '@/utils/formatTitle';

type Params = {
  params: {
    slug: string;
  };
};

function isValidDate(dateString: string) {
  const regEx = /^\d{4}-\d{2}-\d{2}$/;
  return dateString.match(regEx) != null;
}

export async function getStaticPaths() {
  return { paths: [], fallback: true };
}

export async function getStaticProps({ params }: Params) {
  const { slug } = params;

  if (!isValidDate(slug)) return { notFound: true };

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
  const loadingTitle = formatTitle(`Loading Image...`);

  if (isFallback) {
    return (
      <LayoutTemplate py={4}>
        <Head>
          <title>{loadingTitle}</title>
          <meta name="description" content={SITE_DESCRIPTION} />
          <meta
            property="og:description"
            content={SITE_DESCRIPTION}
            key="description"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <LoadingIndicator />
      </LayoutTemplate>
    );
  }

  // only two types, if it's not a video then it's an image
  const isVideo = image.media_type === `video`;
  const src = isVideo ? image.thumbnail_url : image.url;
  const hdSrc = isVideo ? image.url : image.hdurl;
  const ogType = isVideo ? `video.other` : `website`;
  const title = formatTitle(image.title);

  return (
    <LayoutTemplate pt={4}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={image.explanation} />
        <meta property="og:title" content={image.title} key="title" />
        <meta
          property="og:description"
          content={image.explanation}
          key="description"
        />
        <meta property="og:type" content={ogType} key="type" />
        <meta property="og:image" content={src} key="image" />
        <meta property="og:site_name" content="Space Gallery" key="site_name" />
        <meta
          property="og:url"
          content={`${SITE_BASE_URL}image/${image.date}`}
          key="url"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BackHeader />
      <Container as="main" maxW={{ lg: `container.lg` }} mt={4}>
        <ImagePost
          src={src}
          hdSrc={hdSrc}
          title={image.title}
          description={image.explanation}
          date={image.date}
          mediaType={image.media_type}
          copyright={image.copyright}
        />
      </Container>
      <Footer />
    </LayoutTemplate>
  );
}

export default Image;
