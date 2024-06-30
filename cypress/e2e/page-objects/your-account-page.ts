class YourAccountPage {
  elements = {
    yourAccountTitle: () => cy.get("body > div > header > h1"),
  };
}

const yourAccountPage = new YourAccountPage();

export default yourAccountPage;
