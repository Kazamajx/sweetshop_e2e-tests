import { Then } from "@badeball/cypress-cucumber-preprocessor";

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
    // TODO: complete the cycle
  });
});

Then("User sees a title within each sweet card", () => {
  sweetsPage.elements.sweetsList().each(($el, index, $list) => {
    // TODO: complete the cycle
  });
});

Then("User sees a subtitle within each sweet card", () => {
  sweetsPage.elements.sweetsList().each(($el, index, $list) => {
    // TODO: complete the cycle
  });
});

Then("User sees an Add to basket button within each sweet card", () => {
  sweetsPage.elements.sweetsList().each(($el, index, $list) => {
    // TODO: complete the cycle
  });
});
