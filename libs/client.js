import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'ts7skgzte9',
  apiKey: process.env.API_KEY || '',
});
