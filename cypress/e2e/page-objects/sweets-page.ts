class SweetsPage {
  elements = {
    browseSweetsTitle: () => cy.get("body > div > header > h1"),
    sweetsList: () => cy.get(".card"),
    sweetsImages: () => cy.get(""),
    sweetsTitles: () => cy.get(".card-title"),
    sweetsSubtitles: () => cy.get(".card-text"),
    sweetsPrices: () => cy.get(".text-muted"),
    sweetsAddToBasketButton: () => cy.get(".btn"),
  };
}

const sweetsPage = new SweetsPage();

export default sweetsPage;
