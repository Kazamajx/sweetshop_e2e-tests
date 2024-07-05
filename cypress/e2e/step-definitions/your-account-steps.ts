import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

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

Then("User sees {string} sweets in the Your account page", (number: number) => {
  yourAccountPage.elements
    .yourBasketBadgeText()
    .should("be.visible")
    .and("have.text", number);
});

Then("User sees {string} sweets in the Basket list", (number: number) => {
  yourAccountPage.elements.listOfSweetsBasket().should("have.length", number);
});

When(
  "User clicks on the Delete item button for {string} sweets in the basket",
  (sweetsToDelete: number) => {
    yourAccountPage.clickDeleteItemButton(sweetsToDelete);
  }
);

Then(
  "User sees the correct number of sweets in the Basket adding {string} sweets and deleting {string} sweets",
  (sweetsToAdd: number, sweetsToDelete: number) => {
    yourAccountPage.elements
      .yourBasketBadgeText()
      .should("be.visible")
      .and("have.text", sweetsToAdd - sweetsToDelete);
  }
);

Then(
  "User sees the correct number of sweets in the Basket list adding {string} sweets and deleting {string} sweets",
  (sweetsToAdd: number, sweetsToDelete: number) => {
    yourAccountPage.elements
      .listOfSweetsBasket()
      .should("have.length", sweetsToAdd - sweetsToDelete);
  }
);

Then("User sees the Previous Orders table", () => {
  yourAccountPage.elements.previuosOrdersTable().should("be.visible");
});
