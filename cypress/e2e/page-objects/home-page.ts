class HomePage {
  salesImageSelector: string = "body > div > header > div > img";
  welcomeTextSelector: string = "body > div > header > h1";
  browseSweetsButtonSelector: string = "body > div > header > a";
  popularSweetsCardsSelector: string = ".cards";

  elements = {
    get salesImage() {
      return;
    },
  };

  visitExamplePage() {
    cy.visit("/");
  }

  assertTitle(title: string) {
    cy.title().should("eq", title);
  }
}

const homePage = new HomePage();

export default homePage;
