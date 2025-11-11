describe("Home Page", () => {
  it("renders key elements", () => {
    cy.visit("/");
    cy.contains("To get started, edit the page.tsx file.").should("exist");
    cy.contains("Shadcn Components").should("exist");
    cy.contains("Button, Input, Card, Badge").should("exist");
    cy.contains("Default").should("exist");
    cy.contains("Success").should("exist");
  });
});