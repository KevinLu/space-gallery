import { useState } from 'react';
import { SimpleGrid, Skeleton, Text } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import { fetchImagesByPage } from '@/api/apod';
import LoadingIndicator from '@/components/LoadingIndicator';
import type { GalleryProps } from '@/typings/image';
import { SKELETON_ARRAY } from '@/constants';
import ImageCard from './ImageCard';
import BlankImageCard from './BlankImageCard';

function Gallery({ images }: GalleryProps) {
  // start fetching on page 2 since we fetched first page on the server
  const [page, setPage] = useState(2);

  const { data, error, isLoading, isFetching } = useQuery(
    [`queryAPOD`, page],
    () => fetchImagesByPage(page),
    { keepPreviousData: true, initialData: images, enabled: page !== 2 },
  );

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <Text textAlign="center">Ran into an error, please try again.</Text>;
  }

  if (!data) {
    return <Text textAlign="center">No images found!</Text>;
  }

  return (
    <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacing={4}>
      {data.map((image) => (
        <ImageCard
          key={image.title}
          src={image.media_type === `video` ? image.thumbnail_url : image.url}
          title={image.title}
          description={image.explanation}
          date={image.date}
          mediaType={image.media_type}
          copyright={image.copyright}
        />
      ))}
      {isFetching ? (
        SKELETON_ARRAY.map((i) => <Skeleton key={i} minH="38rem" />)
      ) : (
        <BlankImageCard onClick={() => setPage((old) => old + 1)} />
      )}
    </SimpleGrid>
  );
}

export default Gallery;
