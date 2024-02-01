const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://cronlink.ca/",
    viewportHeight: 1024,
    viewportWidth: 1366,
    experimentalStudio: true
  },
});
