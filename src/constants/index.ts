export const LOCALSTORAGE_KEY = `sg-liked-images`;

export const ONE_DAY_MS = 86400000;

export const NUM_DAYS_PER_FETCH = 7;

export const SKELETON_ARRAY = Array.from(
  { length: NUM_DAYS_PER_FETCH },
  (_, k) => k,
);

export const SITE_BASE_URL = `https://space-gallery.vercel.app/`;

export const SITE_DESCRIPTION = `The finest collection of space imagery, curated by NASA's Astronomy Picture of the Day.`;
