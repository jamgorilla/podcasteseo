// lib/sanity.js
import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: 'sx3xrgqp', // e.g. 'abcd1234'
  dataset: 'production', // or whatever your dataset is called
  apiVersion: '2023-01-01', // use a fixed date
  useCdn: true, // faster, cache-enabled for public content
});
