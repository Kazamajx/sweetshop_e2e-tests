import { Then } from "@badeball/cypress-cucumber-preprocessor";

import yourAccountPage from "../page-objects/your-account-page";
import * as yourAccountStrings from "../strings/your-account-strings";

Then("User sees the Your account page", () => {
  yourAccountPage.elements
    .yourAccountTitle()
    .should("be.visible")
    .and("have.text", yourAccountStrings.yourAccountTitleString);
});

Then(
  "User sees the {string} email in the Your account page",
  (email: string) => {
    yourAccountPage.elements
      .emailAddressText()
      .should("be.visible")
      .and("have.text", email);
  }
);

Then(
  "User sees the number of sweets ordered in the last months in the Your Account page",
  () => {
    yourAccountPage.elements.sweetsOrderedChart().should("be.visible");
  }
);
