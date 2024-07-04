class Shared {
  elements = {
    sweetShopImageNavbar: () => cy.get("body > nav > div > a"),
    sweetsButtonNavbar: () => cy.get("#navbarColor01 > ul > a"),
    aboutButtonNavbar: () => cy.get("#navbarColor01 > ul > li:nth-child(2)"),
    loginButtonNavbar: () => cy.get("#navbarColor01 > ul > li:nth-child(3)"),
    basketButtonNavbar: () => cy.get("#navbarColor01 > ul > li:nth-child(4)"),
    numberSweetsBasketNavbar: () => cy.get(".badge"),
  };

  visitUrl(url: string) {
    cy.visit(url);
  }

  clickSweetsButton() {
    this.elements.sweetsButtonNavbar().click();
  }

  clickAboutButton() {
    this.elements.aboutButtonNavbar().click();
  }

  clickLoginButton() {
    this.elements.loginButtonNavbar().click();
  }

  clickBasketButton() {
    this.elements.basketButtonNavbar().click();
  }

  getTitleTab() {
    return cy.title();
  }

  getCurrentUrl() {
    return cy.url();
  }
}

const shared = new Shared();

export default shared;
