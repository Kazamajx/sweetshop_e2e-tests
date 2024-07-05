const fs = require("fs-extra");
const path = require("path");
const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

function getConfigurationByFile(file: string) {
  const pathToConfigFile = path.resolve(".", "config", `${file}.json`);
  return fs.readJson(pathToConfigFile);
}

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on: any, config: any) {
      // Choose the correct file config
      const file = config.env.configFile || "cypress.config.desktop";
      const envConfig = await getConfigurationByFile(file);

      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);

      // Override the default fields and return the new configuration
      return { ...config, ...envConfig };
    },
    specPattern: "**/*.feature",
  },
  reporter: "junit",
  reporterOptions: {
    useFullSuiteTitle: true,
    testsuitesTitle: true,
    mochaFile: "cypress/results/[hash].xml",
    toConsole: false,
    attachments: true,
  },
});
