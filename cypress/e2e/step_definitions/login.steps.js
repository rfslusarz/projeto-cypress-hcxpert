/**
 * Step Definitions para o fluxo de Autenticação (Login).
 * Mapeia os passos descritos no Gherkin (login.feature) para as ações concretas do LoginPage.
 */
const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');
const LoginPage = Cypress.PageObjects.LoginPage;

Given('que acesso a pagina de login', () => {
  // Ponto de entrada padrão para fluxos isolados de autenticação
  LoginPage.visit();
});

When('preencho o email {string} e senha {string}', (email, password) => {
  // Preenchimento sequencial garantindo digitação completa antes da submissão
  LoginPage.fillEmail(email);
  LoginPage.fillPassword(password);
});

When('clico no botao Login', () => {
  LoginPage.clickLogin();
});

When('preencho apenas a senha {string}', (password) => {
  // Cenário de teste negativo: valida bloqueio quando falta o email
  LoginPage.fillPassword(password);
});

When('preencho apenas o email {string}', (email) => {
  // Cenário de teste negativo: valida bloqueio quando falta a senha
  LoginPage.fillEmail(email);
});

When('clico no botao Login sem preencher os campos', () => {
  LoginPage.clickLogin();
});

Then('devo estar logado com sucesso', () => {
  // Verifica indiretamente o sucesso do login buscando o botão de logout (presente na header restrita)
  LoginPage.isLoggedIn();
});

Then('devo ver a mensagem de erro {string}', (message) => {
  // Valida feedback do sistema e exige que a mensagem solicitada seja exatamente a esperada
  LoginPage.getErrorMessage().should('be.visible').and('contain.text', message);
});

Then('devo permanecer na pagina de login', () => {
  // Garante que tentativas falhas não geram navegação indevida ou perda da tela
  cy.url().should('include', '/login');
  LoginPage.getLoginForm().should('be.visible');
});

