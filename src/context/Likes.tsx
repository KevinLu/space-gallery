import { createContext } from 'react';
import type { LikeState } from '@/typings/reducer';

// this holds the INITIAL data loaded from localstorage
export default createContext<LikeState>({});
