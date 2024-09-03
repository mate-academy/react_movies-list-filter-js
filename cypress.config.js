const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: 'cypress/integration/**/*.spec.{js,ts,jsx,tsx}',
    setupNodeEvents(on, config) {
      // Здесь можно добавить дополнительные настройки, если необходимо
    },
    supportFile: 'cypress/support/e2e.js',
    viewportHeight: 1920,
    viewportWidth: 1080,
    video: true,
    screenshotOnRunFailure: true,
    defaultCommandTimeout: 60000, // Увеличивает таймаут выполнения команды
    pageLoadTimeout: 120000, // Увеличивает таймаут загрузки страницы
    requestTimeout: 30000, // Таймаут для HTTP-запросов
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'raw_reports',
    overwrite: false,
    html: false,
    json: true,
  },
  component: {
    specPattern: 'src/**/*.spec.{js,ts,jsx,tsx}',
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },
});
