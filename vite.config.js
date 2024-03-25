import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

export default defineConfig(({ command, mode }) => {
  // Determine entry point based on webpackConfigEnv or default values
  const orgName = "mf-demo";
  const projectName = "navbar";
  const entry = `/Users/malaymishra/Downloads/ALL_TECH/MicroFrontEnd/navbar/src/mf-demo-navbar.js`;
  const filename = 'mf-demo-navbar.js';

  return {
    root: './',
    base: '/',
    plugins: [reactRefresh()], // Use @vitejs/plugin-react-refresh for React support
    build: {
      outDir: '/Users/malaymishra/Downloads/ALL_TECH/MicroFrontEnd/navbar/dist', // Define output directory
      emptyOutDir: true,
      rollupOptions: {
        input: {
          [`${orgName}-${projectName}`]: entry // Define entry point
        },
        output: {
          entryFileNames: filename, // Define filename
          format: 'system', // Define libraryTarget as 'system'
          chunkFileNames: 'chunks/[name]-[hash].js', // Define chunk filename
          dir: '/Users/malaymishra/Downloads/ALL_TECH/MicroFrontEnd/navbar/dist', // Define output directory
          sourcemap: true, // Define sourcemap
          // More output options if needed
        },
      },
    },
    server: {
      compress: true,
      historyApiFallback: true,
      proxy: {
        // Example proxy configuration
        '/api': 'http://localhost:9001',
      },
      headers: { 'Access-Control-Allow-Origin': '*' },
    },
    resolve: {
      alias: {
        // Define aliases if needed
      },
    },
  };
});
