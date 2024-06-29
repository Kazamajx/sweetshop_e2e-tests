class LoginPage {
  elements = {
    emailAddressInput: () => cy.get("#exampleInputEmail"),
    emailAddressError: () =>
      cy.get("body > div > div > div > form > div:nth-child(1) > div"),
    passwordInput: () => cy.get("#exampleInputPassword"),
    passwordError: () =>
      cy.get("body > div > div > div > form > div:nth-child(2) > div"),
    loginButton: () => cy.get(".btn-primary"),
  };

  typeEmail(email: string) {
    this.elements.emailAddressInput().type(email);
  }

  typePassword(password: string) {
    this.elements.passwordInput().type(password);
  }

  clickLogin() {
    this.elements.loginButton().click();
  }
}

const loginPage = new LoginPage();

export default loginPage;
