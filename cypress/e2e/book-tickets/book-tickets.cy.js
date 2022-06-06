describe("Booking tickets tests", () => {
  it("Should display the main page correctly", () => {
    cy.visit("/");
    cy.contains("Фильм").should("be.visible");
    cy.get(".page-nav__day").should("have.length", 7);
  });

  it("Should check the hall from the admin page and book tickets", () => {
      const selector = require("../../fixtures/book-tickets/selectors-open-hall.json");
      const login = require("../../fixtures/admin/login-info.json");

      cy.visit("http://qamid.tmweb.ru/admin/");
      cy.login(login.validEmail, login.validPassword);
      cy.get(selector.blueHall).click();
      cy.get(selector.openMessage).should("have.text", "Продажа билетов открыта!!!");

      cy.visit("/");
      cy.contains("Синий").should("be.visible");
      cy.get(selector.selectTime).last().click();

      const seats = require("../../fixtures/book-tickets/seats.json");
      seats.forEach((seat) => {
        cy.get(
            `.buying-scheme__wrapper > :nth-child(${seat.row}) > :nth-child(${seat.seat})`
          ).click();
      });
      cy.get(selector.book).click();
      cy.get(selector.success).should('be.visible').and('not.be.disabled');
  });
});
