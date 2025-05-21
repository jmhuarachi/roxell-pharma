import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/js/app.tsx',
                'resources/js/admin/pages/Dashboard.tsx',
                'resources/js/admin/pages/UserManagement.tsx'
            ],
            ssr: 'resources/js/ssr.tsx',
            refresh: true,
        }),
        react(),
        tailwindcss(),
    ],
    esbuild: {
        jsx: 'automatic',
    },
    resolve: {
        alias: {
            'ziggy-js': resolve(__dirname, 'vendor/tightenco/ziggy'),
            '@': resolve(__dirname, 'resources/js'),
            '@components': resolve(__dirname, 'resources/js/components'),
            '@admin': resolve(__dirname, 'resources/js/admin'), // Añade este alias
        },
    },
    build: {
        assetsDir: 'assets',
        rollupOptions: {
            output: {
                assetFileNames: 'assets/[name]-[hash][extname]',
            },
        },
    },
});