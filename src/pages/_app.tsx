import '@/styles/globals.css';
import theme from '@/styles/theme';
import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useState, useEffect } from 'react';
import InitialLikesContext from '@/context/Likes';
import { PageContextProvider } from '@/context/Page';
import { LOCALSTORAGE_KEY } from '@/constants';
import getFromLocalStorage from '@/utils/getFromLocalStorage';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      cacheTime: 3600000,
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  const [initialLikedImages, setInitialLikedImages] = useState({});

  // only run this once to grab likes from localstorage
  // modification of likes will be done in memory through individual component states
  useEffect(() => {
    setInitialLikedImages(getFromLocalStorage(LOCALSTORAGE_KEY));
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <InitialLikesContext.Provider value={initialLikedImages}>
          <PageContextProvider>
            <Component {...pageProps} />
          </PageContextProvider>
        </InitialLikesContext.Provider>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default MyApp;
