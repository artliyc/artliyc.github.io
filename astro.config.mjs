import { defineConfig } from 'astro/config';

export default defineConfig({
  devToolbar: { enabled: false },
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru', 'en'],
  },
});
