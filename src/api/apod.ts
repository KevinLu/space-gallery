import type { APODImage } from '@/typings/api';
import axios from 'axios';

const API_URL = `/api/apod`;

// Calls our own Next.js API route (not NASA's API)
const clientSideFetchImagesByPage = async (page: number) => {
  const res = await axios.get<Array<APODImage>>(API_URL, {
    params: {
      page,
    },
  });

  return res.data;
};

export default clientSideFetchImagesByPage;
