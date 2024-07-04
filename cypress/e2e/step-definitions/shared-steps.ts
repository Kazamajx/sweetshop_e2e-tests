import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

import shared from "../page-objects/shared";

Given("User visits the {string} url", (url: string) => {
  shared.visitUrl(url);
});

Then("User sees {string} title in the tab", (title: string) => {
  shared.getTitleTab().should("eq", title);
});

Then("User sees {string} url in the searchbar", (url: string) => {
  shared.getCurrentUrl().should("eq", `${Cypress.config().baseUrl}${url}`);
});

Then(
  "User sees {string} number of sweets added to the basket in the navbar",
  (numberOfSweets: number) => {
    shared.elements
      .numberSweetsBasketNavbar()
      .should("have.text", numberOfSweets);
  }
);
