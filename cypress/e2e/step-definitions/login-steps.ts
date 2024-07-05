import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import loginPage from "../page-objects/login-page";
import * as loginStrings from "../strings/login-strings";

Then("User sees Email address textbox", () => {
  loginPage.elements.emailAddressInput().should("be.visible");
});

Then("User sees Password textbox", () => {
  loginPage.elements.passwordInput().should("be.visible");
});

Then("User sees Login button", () => {
  loginPage.elements.loginButton().should("be.visible");
});

When(
  "User types {string} email in the Email address textbox",
  (email: string) => {
    loginPage.typeEmail(email);
  }
);

When(
  "User types {string} password in the Password textbox",
  (password: string) => {
    loginPage.typePassword(password);
  }
);

When("User clicks on the Login button", () => {
  loginPage.clickLogin();
});

Then(
  "User sees Please enter a valid email address error under the Email address textbox",
  () => {
    loginPage.elements
      .emailAddressError()
      .should("be.visible")
      .and("have.text", loginStrings.emailAddressErrorString);
  }
);

Then(
  "User sees Please enter a valid passowrd address error under the Password textbox",
  () => {
    loginPage.elements
      .passwordError()
      .should("be.visible")
      .and("have.text", loginStrings.passwordErrorString);
  }
);

Given(
  "User is logged into the Sweets Shop platorm with {string} email and {string} password",
  (email: string, password: string) => {
    loginPage.typeEmail(email);
    loginPage.typePassword(password);
    loginPage.clickLogin();
  }
);
