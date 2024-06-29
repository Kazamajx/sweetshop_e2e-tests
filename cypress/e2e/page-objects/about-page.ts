class AboutPage {
  elements = {
    sweetShopProjectText: () => cy.get("body > div > header > h1"),
    demonstrationText: () => cy.get("body > div > header > p:nth-child(2)"),
    practiceDemonstrationText: () =>
      cy.get("body > div > header > p:nth-child(3)"),
  };
}

const aboutPage = new AboutPage();

export default aboutPage;
