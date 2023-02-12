import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

// define a function to create a client
// so we just need to pass some parameter to do that
export const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECTID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2022-11-12",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = ImageUrlBuilder(client);

// create a function to load images from sanity
export const urlFor = (source) => builder.image(source);
