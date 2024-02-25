class ExamplePage {
  /**
   * For the elements use:
   * elements = {
   *      get button() {
   *          return cy.get("<selector>");
   *      }
   * }
   */

  visitExamplePage() {
    cy.visit("/");
  }

  assertTitle(title: string) {
    cy.title().should("eq", title);
  }
}

const examplePage = new ExamplePage();

export default examplePage;
