import { mergeConfig } from 'vite';
import baseConfig from './vite.config.base';
import configCompressPlugin from './plugin/compress';
import configVisualizerPlugin from './plugin/visualizer';
import configImageminPlugin from './plugin/imagemin';

export default mergeConfig(
  {
    mode: 'production',
    base: '/vue-simple-admin-starter',
    plugins: [
      configCompressPlugin('gzip'),
      configVisualizerPlugin(),
      configImageminPlugin(),
    ],
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            ant: ['ant-design-vue', '@ant-design-vue/pro-layout'],
            vue: ['vue', 'vue-router', 'pinia', '@vueuse/core'],
          },
        },
      },
      chunkSizeWarningLimit: 2000,
    },
  },
  baseConfig,
);
