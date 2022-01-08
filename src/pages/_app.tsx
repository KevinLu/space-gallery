import '@/styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useState, useEffect } from 'react';
import InitialLikesContext from '@/context/Likes';
import { LOCALSTORAGE_KEY } from '@/constants';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      cacheTime: 3600000,
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  const [initialLikedImages, setInitialLikedImages] = useState({});

  // only run this once to grab likes from localstorage
  // modification of likes will be done in memory through individual component states
  useEffect(() => {
    setInitialLikedImages(
      JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY) ?? `{}`),
    );
  }, []);

  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <InitialLikesContext.Provider value={initialLikedImages}>
          <Component {...pageProps} />
        </InitialLikesContext.Provider>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default MyApp;
