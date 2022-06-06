const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    projectId: "kx2fba",
    baseUrl: 'http://qamid.tmweb.ru/client/index.php',
    retries: 3,
  },
})
