## About

space-gallery is a small app designed to nicely format images from NASA's Astronomy Picture of the Day API. Each image's page is statically generated with Next.js, thus allowing shareable links with the appropriate `meta` tags.

## Try it out

The project is currently hosted at https://space-gallery.vercel.app/
## Features

- Responsive design, works on mobile
- Statically generated
- Shareable links to each image
- Pagination / fetch more images
- Like button for images (persisted locally)
- Open Graph tags for SEO and link previews
- Dark mode

## Screenshots
![Home page](https://i.imgur.com/pWJKMoq.png)
![Image page](https://i.imgur.com/lTIwdjZ.png)

## Getting started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/pages/index.ts`. The page auto-updates as you edit the file.

The file for fetching images is `src/api/apod.ts`. Make sure to replace the API Key in this file with your own.
