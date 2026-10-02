import { defineConfig } from 'astro/config';

// On GitHub Pages the deploy workflow passes the public address and the
// sub-path of the repository; locally both stay at their defaults.
export default defineConfig({
  site: process.env.SITE_URL,
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru', 'en'],
  },
});
