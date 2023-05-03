import { defineConfig } from 'cypress';
import codeCoverageTask from '@cypress/code-coverage/task';
import vitePreprocessor from 'cypress-vite';

export default defineConfig({
  e2e: {
    video: false,
    baseUrl: 'http://localhost:3001',
    setupNodeEvents(on, config) {
      on('file:preprocessor', vitePreprocessor());
      codeCoverageTask(on, config);
      return config;
      // implement node event listeners here
    },
  },
});
