export interface ImageCardProps {
  src: string;
  title: string;
  date: string; // YYYY-MM-DD
  copyright?: string;
  description: string;
  isLiked: boolean;
  likeImage: (title: string) => void; // function to like the image
}

export interface BlankImageCardProps {
  onClick: () => void;
}
