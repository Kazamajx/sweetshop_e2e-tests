class YourAccountPage {
  elements = {
    yourAccountTitle: () => cy.get("body > div > header > h1"),
    emailAddressText: () => cy.get("body > div > header > p > a"),
    sweetsOrderedChart: () => cy.get("#transactionChart"),
  };
}

const yourAccountPage = new YourAccountPage();

export default yourAccountPage;
