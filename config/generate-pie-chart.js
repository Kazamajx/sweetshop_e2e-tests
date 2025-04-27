const fs = require("fs");
const path = require("path");
const { ChartJSNodeCanvas } = require("chartjs-node-canvas");

// Path to the log.json file
const logFilePath = path.resolve(__dirname, "../cypress/generated/log.json");

// Read and parse the log.json file
const logData = JSON.parse(fs.readFileSync(logFilePath, "utf-8"));

// Extract test results
let passed = 0,
  failed = 0,
  skipped = 0;

logData.forEach((feature) => {
  feature.elements.forEach((scenario) => {
    scenario.steps.forEach((step) => {
      if (step.result.status === "passed") passed++;
      else if (step.result.status === "failed") failed++;
      else if (step.result.status === "skipped") skipped++;
    });
  });
});

// Generate the pie chart
const width = 800; // Chart width
const height = 600; // Chart height
const chartJSNodeCanvas = new ChartJSNodeCanvas({ width, height });

(async () => {
  const configuration = {
    type: "pie",
    data: {
      labels: ["Passed", "Failed", "Skipped"],
      datasets: [
        {
          data: [passed, failed, skipped],
          backgroundColor: ["#4CAF50", "#F44336", "#FFC107"],
        },
      ],
    },
  };

  const image = await chartJSNodeCanvas.renderToBuffer(configuration);
  const outputPath = path.resolve(
    __dirname,
    "../cypress/generated/test-results-chart.png"
  );
  fs.writeFileSync(outputPath, image);
  console.log(`Pie chart saved to ${outputPath}`);
})();
