import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import basicSsl from '@vitejs/plugin-basic-ssl';

// https://vitejs.dev/config/
export default defineConfig({
    mode: 'development',
    plugins: [vue(), basicSsl()],
    base: '',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@store': path.resolve(__dirname, './src/store'),
            '@components': path.resolve(__dirname, './src/components'),
            '@modules': path.resolve(__dirname, './src/modules'),
            '@pages': path.resolve(__dirname, './src/pages')
        }
    }
});
