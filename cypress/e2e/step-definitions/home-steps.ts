import { Then, When } from "@badeball/cypress-cucumber-preprocessor";

import homePage from "../page-objects/home-page";

When("User clicks on the Browse Sweets button", () => {
  homePage.clickSweetsButton();
});

Then("User sees the four most popular sweets", () => {
  homePage.elements.mostPopularRetroSweets().should("have.length", 4);
});
