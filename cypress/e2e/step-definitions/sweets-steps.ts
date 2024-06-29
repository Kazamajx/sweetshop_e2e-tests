import { Then } from "@badeball/cypress-cucumber-preprocessor";

import sweetsPage from "../page-objects/sweets-page";

Then("User sees the Sweets page", () => {
  sweetsPage.elements.browseSweetsTitle().should("have.text", "Browse sweets");
});
