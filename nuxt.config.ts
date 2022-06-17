import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({
    buildModules: [
        '@nuxtjs/pwa'
    ],
    serverMiddleware: [
        { path: "/api", handler: "~/server/api.ts" },
    ],
    css: [
        'primevue/resources/themes/bootstrap4-dark-blue/theme.css',
        'primevue/resources/primevue.css',
        'primeicons/primeicons.css',
        'primeflex/primeflex.css'
    ],
    build: {
        transpile: ['primevue']
    }
});