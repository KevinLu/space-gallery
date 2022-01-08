import { SimpleGrid } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import GetAPOD from '@/api/apod';
import LoadingIndicator from '@/components/LoadingIndicator';
import { APODImage } from '@/typings/api';
import ImageCard from './ImageCard';

function Gallery() {
  const { data, isLoading } = useQuery(`queryAPOD`, async () => {
    // default is to fetch images up to 7 days ago
    // en-CA locale provides YYYY-MM-DD format
    const start_date = new Date(
      Date.now() - 7 * 24 * 60 * 60 * 1000,
    ).toLocaleDateString(`en-CA`);

    const res = await GetAPOD({
      start_date,
    });

    if (Array.isArray(res.data)) {
      return res.data as Array<APODImage>;
    }

    return [res.data];
  });

  console.log(data);

  if (isLoading || !data) {
    return <LoadingIndicator />;
  }

  return (
    <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacing={4}>
      {data.map((image) => (
        <ImageCard
          key={image.title}
          src={image.url}
          title={image.title}
          description={image.explanation}
          date={image.date}
          copyright={image.copyright}
        />
      ))}
    </SimpleGrid>
  );
}

export default Gallery;
