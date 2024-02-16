import {defineConfig, loadEnv} from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vitejs.dev/config/
export default ({mode}) => {
    process.env = {...process.env, ...loadEnv(mode, process.cwd())};

    return defineConfig({
        mode: 'development',
        plugins: [vue()],
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
};
