type BaseAPODImage = {
  copyright?: string; // defined if image not in public domain
  date: string; // YYYY-MM-DD
  explanation: string;
  hdurl: string;
  service_version: string;
  title: string;
  url: string;
};

// APOD Image
export type APODImage = BaseAPODImage &
  (
    | {
        media_type: 'image';
        thumbnail_url: undefined;
      }
    | {
        media_type: 'video';
        thumbnail_url: string; // only defined if media_type is video
      }
  );

// responses from the API can be a single object or array of APODImage
export type APODResponse = APODImage | Array<APODImage>;

export interface IGetAPOD {
  date?: string;
  start_date?: string;
  end_date?: string;
  count?: number;
  thumbs?: boolean;
}
