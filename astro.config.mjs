// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    i18n: {
        locales: ['en', 'it', 'es'],
        defaultLocale: 'en',
        
    },
    output: 'static',
    base: '/BTS_event_web_page/'
});
