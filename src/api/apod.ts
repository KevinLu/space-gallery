import type { IGetAPOD, APODResponse } from '@/typings/api';
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
      api_key: `DEMO_KEY`,
      date,
      start_date,
      end_date,
      count,
      thumbs,
    },
  });
};

export default GetAPOD;
