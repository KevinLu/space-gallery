import {
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
  useState,
} from 'react';

interface IPageContext {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
}

const defaultPageContext = {
  page: 1,
  setPage: () => {
    return;
  },
};

// this holds the current page for the Gallery
export const PageContext = createContext<IPageContext>(defaultPageContext);

export const PageContextProvider = ({ children }: { children: ReactNode }) => {
  const [page, setPage] = useState(1);
  const value = { page, setPage };
  return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
};
