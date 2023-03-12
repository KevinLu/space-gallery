import type { NextApiRequest, NextApiResponse } from 'next';
import type { IGetAPOD, APODResponse, APODImage } from '@/typings/api';
import { ONE_DAY_MS, NUM_DAYS_PER_FETCH } from '@/constants';
import axios from 'axios';

const APOD_API_URL = `https://api.nasa.gov/planetary/apod`;

/**
 * Wrapper around a get request to call the APOD api
 * @param {IGetAPOD} - relevant query params sent to the api
 * @returns {APODResponse} - a single APODImage or an array of APODImage
 */
export const GetAPOD = ({
  date,
  start_date,
  end_date,
  count,
  thumbs,
}: IGetAPOD) => {
  return axios.get<APODResponse>(APOD_API_URL, {
    params: {
      api_key: process.env.APOD_API_KEY,
      date,
      start_date,
      end_date,
      count,
      thumbs,
    },
  });
};

export const fetchImagesByPage = async (
  page: number,
): Promise<Array<APODImage>> => {
  // default is to fetch images up to NUM_DAYS_PER_FETCH days ago
  // multiply by the page to fetch previous NUM_DAYS_PER_FETCH days of images
  const start = new Date(Date.now() - NUM_DAYS_PER_FETCH * page * ONE_DAY_MS);
  const start_date = new Date(
    start.getTime() - start.getTimezoneOffset() * 60000,
  )
    .toISOString()
    .split(`T`)[0];

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

  // single object, force array
  return [res.data];
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Only support GET request
  if (req.method === `GET`) {
    if (req.query && typeof req.query.page === `string`) {
      return fetchImagesByPage(parseInt(req.query.page, 10))
        .then((images) => {
          res.status(200).json(images);
        })
        .catch((err) => {
          res
            .status(400)
            .send({ error: `Failed to fetch images: ${err.message}` });
        });
    } else {
      res.status(400).send({ error: `page must a number` });
    }
  } else {
    res.status(501).send({ error: `Not implemented` });
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};
