import { APODImage } from './api';

export interface ImageCardProps {
  src: string;
  title: string;
  date: string; // YYYY-MM-DD
  copyright?: string;
  description: string;
  mediaType: 'image' | 'video';
  isLiked: boolean;
  likeImage: (title: string) => void; // function to like the image
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
