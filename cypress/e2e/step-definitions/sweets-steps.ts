import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

import sweetsPage from "../page-objects/sweets-page";
import * as browseSweetsStrings from "../strings/browse-sweets-strings";

Then("User sees the Sweets page", () => {
  sweetsPage.elements
    .browseSweetsTitle()
    .should("be.visible")
    .and("have.text", browseSweetsStrings.browseSweetsTitleString);
});

Then("User sees the list of sweets", () => {
  sweetsPage.elements.sweetsList().should("be.visible").and("have.length", 16);
});

Then("User sees an image within each sweet card", () => {
  sweetsPage.elements.sweetsList().each(($el, index, $list) => {
    cy.wrap($el).find(".card-img-top").should("be.visible");
  });
});

Then("User sees a title within each sweet card", () => {
  sweetsPage.elements.sweetsList().each(($el, index, $list) => {
    cy.wrap($el).find(".card-title").should("be.visible");
  });
});

Then("User sees a subtitle within each sweet card", () => {
  sweetsPage.elements.sweetsList().each(($el, index, $list) => {
    cy.wrap($el).find(".card-text").should("be.visible");
  });
});

Then("User sees a price within each sweet card", () => {
  sweetsPage.elements.sweetsList().each(($el, index, $list) => {
    cy.wrap($el).find(".text-muted").should("be.visible");
  });
});

Then("User sees an Add to basket button within each sweet card", () => {
  sweetsPage.elements.sweetsList().each(($el, index, $list) => {
    cy.wrap($el).find(".btn").should("be.visible");
  });
});

When(
  "User adds to the basket {string} sweets clicking on the Add to Basket button",
  (numberOfSweets: number) => {
    sweetsPage.clickAddToBasketButton(numberOfSweets);
  }
);
