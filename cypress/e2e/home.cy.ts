describe("Home Page", () => {
  it("renders key elements", () => {
    cy.visit("/");

    // Heading and intro text
    cy.contains("Trang Home đơn giản").should("exist");
    cy.contains("Demo các components: Button, Input, Card, Badge.").should("exist");

    // Card titles
    cy.contains("Liên hệ").should("exist");
    cy.contains("Trạng thái").should("exist");

    // Input and button
    cy.get('input[placeholder="you@domain.com"]').should("exist");
    cy.contains("Gửi").should("exist");

    // Badges and buttons
    cy.contains("Default").should("exist");
    cy.contains("Success").should("exist");
    cy.contains("Outline").should("exist");
    cy.contains("Secondary").should("exist");

    // Alert sample
    cy.contains("Thành công").should("exist");
    cy.contains("Yêu cầu đã được xử lý.").should("exist");
  });
});