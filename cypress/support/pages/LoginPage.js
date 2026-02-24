class LoginPage {
  visit() {
    cy.visit("/login");
  }

  fillEmail(email) {
    cy.get('[data-qa="login-email"]').clear().type(email);
  }

  fillPassword(password) {
    cy.get('[data-qa="login-password"]').clear().type(password);
  }

  clickLogin() {
    cy.get('[data-qa="login-button"]').click();
  }

  login(email, password) {
    this.fillEmail(email);
    this.fillPassword(password);
    this.clickLogin();
  }

  getErrorMessage() {
    return cy.get('form[action="/login"]').find("p");
  }

  getLoginForm() {
    return cy.get('form[action="/login"]');
  }

  isLoggedIn() {
    return cy.get('a[href="/logout"]').should("exist");
  }
}

module.exports = new LoginPage();
