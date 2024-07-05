class YourAccountPage {
  elements = {
    yourAccountTitle: () => cy.get("body > div > header > h1"),
    previuosOrdersTable: () => cy.get("#transactions"),
    emailAddressText: () => cy.get("body > div > header > p > a"),
    yourBasketBadgeText: () =>
      cy.get(
        "body > div > div > div.col-md-4.order-md-2.mb-4 > h4 > span.badge.badge-secondary.badge-pill"
      ),
    listOfSweetsBasket: () => cy.get(".list-group-item"),
    sweetsOrderedChart: () => cy.get("#transactionChart"),
  };

  clickDeleteItemButton(sweetsToDelete: number) {
    for (let i = 0; i < sweetsToDelete; i++) {
      cy.get(".list-group-item").eq(i).find(".small").click();
    }
  }
}

const yourAccountPage = new YourAccountPage();

export default yourAccountPage;
