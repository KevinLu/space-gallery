import { LOCALSTORAGE_KEY } from '@/constants';
import getFromLocalStorage from './getFromLocalStorage';

const likeImage = (imageName: string) => {
  const currentLikes = getFromLocalStorage(LOCALSTORAGE_KEY);

  if (currentLikes[imageName]) {
    delete currentLikes[imageName];
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(currentLikes));
  } else {
    currentLikes[imageName] = true;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(currentLikes));
  }
};

export default likeImage;
