import { Then } from "@badeball/cypress-cucumber-preprocessor";

import yourBasketPage from "../page-objects/your-basket-page";

Then(`User sees the First name textbox`, () => {
  yourBasketPage.elements.firstNameInput().should("be.visible");
});

Then(`User sees the Last name textbox`, () => {
  yourBasketPage.elements.lastNameInput().should("be.visible");
});

Then(`User sees the Email textbox`, () => {
  yourBasketPage.elements.emailInput().should("be.visible");
});

Then(`User sees the Address textbox`, () => {
  yourBasketPage.elements.addressInput().should("be.visible");
});

Then(`User sees the Address 2 textbox`, () => {
  yourBasketPage.elements.address2Input().should("be.visible");
});

Then(`User sees the Country dropdown menu`, () => {
  yourBasketPage.elements.countryDropdownMenu().should("be.visible");
});

Then(`User sees the City dropdown menu`, () => {
  yourBasketPage.elements.cityDropdownMenu().should("be.visible");
});

Then(`User sees the Zip texbox`, () => {
  yourBasketPage.elements.zipInput().should("be.visible");
});

Then(`User sees the Name on card textbox`, () => {
  yourBasketPage.elements.nameOnCardInput().should("be.visible");
});

Then(`User sees the Credit card number textbox`, () => {
  yourBasketPage.elements.creditCardNumber().should("be.visible");
});

Then(`User sees the Expiration texbox`, () => {
  yourBasketPage.elements.expirationInput().should("be.visible");
});

Then(`User sees the CVV textbox`, () => {
  yourBasketPage.elements.cvvInput().should("be.visible");
});

Then(`User sees the Continue to checkout button`, () => {
  yourBasketPage.elements.continueToCheckoutButton().should("be.visible");
});
