import type { IGetAPOD, APODResponse } from '@/typings/api';
import { ONE_DAY_MS, NUM_DAYS_PER_FETCH } from '@/constants';
import axios from 'axios';

const APOD_API_URL = `https://api.nasa.gov/planetary/apod`;

/**
 * Wrapper around a get request to call the APOD api
 * @param {IGetAPOD} - relevant query params sent to the api
 * @returns {APODResponse} - a single APODImage or an array of APODImage
 */
const GetAPOD = ({ date, start_date, end_date, count, thumbs }: IGetAPOD) => {
  return axios.get<APODResponse>(APOD_API_URL, {
    params: {
      api_key: `TnHVgjGmGcNAhHGBGnn7eoR1b3QlJ1aejKwJqZBC`,
      date,
      start_date,
      end_date,
      count,
      thumbs,
    },
  });
};

export const fetchImagesByPage = async (page: number) => {
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
};

export default GetAPOD;
