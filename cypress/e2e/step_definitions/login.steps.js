const {
  Given,
  When,
  Then,
} = require("@badeball/cypress-cucumber-preprocessor");
const LoginPage = Cypress.PageObjects.LoginPage;

Given("que acesso a pagina de login", () => {
  LoginPage.visit();
});

When("preencho o email {string} e senha {string}", (email, password) => {
  LoginPage.fillEmail(email);
  LoginPage.fillPassword(password);
});

When("clico no botao Login", () => {
  LoginPage.clickLogin();
});

When("preencho apenas a senha {string}", (password) => {
  LoginPage.fillPassword(password);
});

When("preencho apenas o email {string}", (email) => {
  LoginPage.fillEmail(email);
});

When("clico no botao Login sem preencher os campos", () => {
  LoginPage.clickLogin();
});

Then("devo estar logado com sucesso", () => {
  LoginPage.isLoggedIn();
});

Then("devo ver a mensagem de erro {string}", (message) => {
  LoginPage.getErrorMessage().should("be.visible").and("contain.text", message);
});

Then("devo permanecer na pagina de login", () => {
  cy.url().should("include", "/login");
  LoginPage.getLoginForm().should("be.visible");
});
