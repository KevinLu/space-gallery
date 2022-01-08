import { APODImage } from './api';

export interface ImageCardProps {
  src: string;
  title: string;
  date: string; // YYYY-MM-DD
  copyright?: string;
  description: string;
  mediaType: 'image' | 'video';
}

export interface BlankImageCardProps {
  onClick: () => void;
}

export interface ImagePageProps {
  image: APODImage;
}

export interface ImagePostProps {
  src: string;
  hdSrc: string;
  title: string;
  date: string; // YYYY-MM-DD
  copyright?: string;
  description: string;
  mediaType: 'image' | 'video';
}

export interface HomeProps {
  images: Array<APODImage>;
}

export interface GalleryProps {
  images: Array<APODImage>;
}
