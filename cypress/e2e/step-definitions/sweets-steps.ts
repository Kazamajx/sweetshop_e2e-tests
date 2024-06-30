import { Then } from "@badeball/cypress-cucumber-preprocessor";

import sweetsPage from "../page-objects/sweets-page";
import * as browseSweetsStrings from "../strings/browse-sweets-strings";

Then("User sees the Sweets page", () => {
  sweetsPage.elements
    .browseSweetsTitle()
    .should("be.visible")
    .and("have.text", browseSweetsStrings.browseSweetsTitleString);
});
