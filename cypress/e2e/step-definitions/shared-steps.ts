import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

import shared from "../page-objects/shared";

Given("I visit the {string} url", (url: string) => {
  shared.visitUrl(url);
});

Then("I see {string} title in the tab", (title: string) => {
  debugger;
  shared.assertTitle(title);
});
