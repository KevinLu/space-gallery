import { useState, useReducer, useEffect } from 'react';
import { SimpleGrid, Skeleton, Text } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import GetAPOD from '@/api/apod';
import LoadingIndicator from '@/components/LoadingIndicator';
import type { APODImage } from '@/typings/api';
import type { LikeAction, LikeState } from '@/typings/reducer';
import {
  LOCALSTORAGE_KEY,
  ONE_DAY_MS,
  NUM_DAYS_PER_FETCH,
  SKELETON_ARRAY,
} from '@/constants';
import ImageCard from './ImageCard';
import BlankImageCard from './BlankImageCard';

const initLikedImages = () => {
  if (typeof window !== `undefined`) {
    return JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY) ?? `{}`);
  }
  return {};
};

const reducer = (state: LikeState, action: LikeAction) => {
  switch (action.type) {
    case `LIKE`:
      const isLiked = state[action.payload];
      return { ...state, [action.payload]: !isLiked };
    case `RESET`:
      return initLikedImages();
    default:
      return state;
  }
};

function Gallery() {
  const [state, dispatch] = useReducer(reducer, undefined, initLikedImages);
  const [page, setPage] = useState(1);

  const { data, error, isLoading, isFetching } = useQuery(
    [`queryAPOD`, page],
    async () => {
      // default is to fetch images up to NUM_DAYS_PER_FETCH days ago
      // en-CA locale provides YYYY-MM-DD format
      // multiply by the page to fetch previous NUM_DAYS_PER_FETCH days of images
      const start_date = new Date(
        Date.now() - NUM_DAYS_PER_FETCH * page * ONE_DAY_MS,
      ).toLocaleDateString(`en-CA`);

      const res = await GetAPOD({
        start_date,
        thumbs: true,
      });

      if (Array.isArray(res.data)) {
        // sort the images by most recent date
        return res.data.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
        );
      }

      return [res.data];
    },
    { keepPreviousData: true },
  );

  useEffect(() => {
    if (typeof window !== `undefined` && state) {
      localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(state));
    }
  }, [state]);

  const likeImage = (title: string) => {
    dispatch({ type: `LIKE`, payload: title });
  };

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
          isLiked={state[image.title]}
          likeImage={likeImage}
        />
      ))}
      {isFetching ? (
        SKELETON_ARRAY.map((i) => <Skeleton key={i} minH="30rem" />)
      ) : (
        <BlankImageCard onClick={() => setPage((old) => old + 1)} />
      )}
    </SimpleGrid>
  );
}

export default Gallery;
