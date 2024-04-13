const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

      const domain = config.env.domain
      if(domain) config.specPattern = `cypress/e2e/${domain}`

      return config
    },
  },
});
