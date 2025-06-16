/* eslint-disable @typescript-eslint/no-explicit-any */

import { ENV_DOMAIN } from "@/config-global.env";

export default async function sitemap() {
  return [{
    url: `${ENV_DOMAIN}/`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1,
  }]
}
