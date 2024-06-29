class HomePage {
  elements = {
    browseSweetsButton: () => cy.get("body > div > header > a"),
    mostPopularRetroSweets: () => cy.get(".cards"),
  };

  clickSweetsButton() {
    this.elements.browseSweetsButton().click();
  }
}

const homePage = new HomePage();

export default homePage;
