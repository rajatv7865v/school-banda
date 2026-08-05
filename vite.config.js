import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    allowedHosts: true,
  },
  preview: {
    allowedHosts: ['sgmssic.com', 'www.sgmssic.com', 'localhost', '127.0.0.1', '.sgmssic.com'],
    host: true,
  },
});
