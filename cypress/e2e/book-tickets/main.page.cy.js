describe("Booking tickets tests", () => {
  it("Should display the main page correctly", () => {
    cy.visit("/");
    cy.contains("Фильм").should("be.visible");
    cy.get(".page-nav__day").should("have.length", 7);
  });
});
