class SweetsPage {
  elements = {
    browseSweetsTitle: () => cy.get("body > div > header > h1"),
    sweetsList: () => cy.get(""),
  };
}

const sweetsPage = new SweetsPage();

export default sweetsPage;
