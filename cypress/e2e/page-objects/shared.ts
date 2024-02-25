class Shared {
  visitUrl(url: string) {
    cy.visit(url);
  }

  assertTitle(title: string) {
    cy.title().should("eq", title);
  }
}

const shared = new Shared();

export default shared;
