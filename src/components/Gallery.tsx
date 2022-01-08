import { useReducer, useEffect } from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import GetAPOD from '@/api/apod';
import LoadingIndicator from '@/components/LoadingIndicator';
import type { APODImage } from '@/typings/api';
import type { LikeAction, LikeState } from '@/typings/reducer';
import { LOCALSTORAGE_KEY } from '@/constants';
import ImageCard from './ImageCard';

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

  useEffect(() => {
    if (typeof window !== `undefined` && state) {
      localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(state));
    }
  }, [state]);

  const likeImage = (title: string) => {
    dispatch({ type: `LIKE`, payload: title });
  };

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
          isLiked={state[image.title]}
          likeImage={likeImage}
        />
      ))}
    </SimpleGrid>
  );
}

export default Gallery;
