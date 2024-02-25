import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

import examplePage from "../page-objects/example-page";

Given("I want to visit the Hyntelo website", () => {
  examplePage.visitExamplePage();
});

Then("I see {string} title in the tab", (title: string) => {
  examplePage.assertTitle(title);
});
