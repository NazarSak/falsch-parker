import { createClient } from '@sanity/client';
import { projectId, token, dataset, apiVersion } from './env';

export const client = createClient({
  projectId,
  dataset,
  useCdn: true,
  apiVersion,
  token,
});
