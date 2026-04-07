// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  use: {
    headless: false,
    screenshot: 'on',
    video: 'retain-on-failure'
  },
});