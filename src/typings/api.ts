// APOD Image
export type APODImage = {
  copyright?: string; // defined if image not in public domain
  date: string; // YYYY-MM-DD
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
};

// responses from the API can be a single object or array of APODImage
export type APODResponse = APODImage | Array<APODImage>;

export interface IGetAPOD {
  date?: string;
  start_date?: string;
  end_date?: string;
  count?: number;
  thumbs?: boolean;
}
