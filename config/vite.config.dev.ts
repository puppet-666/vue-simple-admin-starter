import { mergeConfig } from 'vite';
import VueDevTools from 'vite-plugin-vue-devtools';
import baseConfig from './vite.config.base';

export default mergeConfig(
  {
    mode: 'development',
    server: {
      open: true,
      host: '0.0.0.0',
    },
    plugins: [VueDevTools()],
  },
  baseConfig,
);
