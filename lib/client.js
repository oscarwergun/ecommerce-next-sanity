import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

// define a function to create a client
// so we just need to pass some parameter to do that
export const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2022-11-12",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  ignoreBrowserTokenWarning: true,
});

const builder = ImageUrlBuilder(client);

// create a function to load images from sanity
export const urlFor = (source) => builder.image(source);
