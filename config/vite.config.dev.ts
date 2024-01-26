import { mergeConfig } from 'vite';
import baseConfig from './vite.config.base';

// import VueDevTools from 'vite-plugin-vue-devtools';

export default mergeConfig(
  {
    mode: 'development',
    server: {
      open: true,
      host: '0.0.0.0',
    },
    // plugins: [VueDevTools()],
  },
  baseConfig,
);
