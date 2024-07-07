class YourBasketPage {
  elements = {
    firstNameInput: () => cy.get("#name"),
    lastNameInput: () => cy.get("#name"),
    emailInput: () => cy.get("#email"),
    addressInput: () => cy.get("#address"),
    address2Input: () => cy.get("#address2"),
    countryDropdownMenu: () => cy.get("#country"),
    cityDropdownMenu: () => cy.get("#city"),
    zipInput: () => cy.get("#zip"),
    nameOnCardInput: () => cy.get("#cc-name"),
    creditCardNumber: () => cy.get("#cc-number"),
    expirationInput: () => cy.get("#cc-expiration"),
    cvvInput: () => cy.get("#cc-cvv"),
    continueToCheckoutButton: () =>
      cy.get("body > div > div > div.col-md-8.order-md-1 > form > button"),
  };
}

const yourBasketPage = new YourBasketPage();

export default yourBasketPage;
