import { Then } from "@badeball/cypress-cucumber-preprocessor";

import yourAccountPage from "../page-objects/your-account-page";
import * as yourAccountStrings from "../strings/your-account-strings";

Then("User sees the Your account page", () => {
  yourAccountPage.elements
    .yourAccountTitle()
    .should("be.visible")
    .and("have.text", yourAccountStrings.yourAccountTitleString);
});
