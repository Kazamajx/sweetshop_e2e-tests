import { Then } from "@badeball/cypress-cucumber-preprocessor";

import aboutPage from "../page-objects/about-page";
import * as aboutStrings from "../strings/about-page";

Then("User sees services about the Sweets Shops website", () => {
  aboutPage.elements
    .sweetShopProjectText()
    .should("be.visible")
    .and("have.text", aboutStrings.sweetShopProjectString);
  aboutPage.elements
    .demonstrationText()
    .should("be.visible")
    .and("have.text", aboutStrings.demonstrationString);
  aboutPage.elements
    .practiceDemonstrationText()
    .should("be.visible")
    .and("have.text", aboutStrings.practiceDemonstrationText);
});
