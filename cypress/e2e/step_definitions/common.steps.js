/**
 * Step Definitions Globais (Comuns).
 * Centraliza os passos básicos e transversais (ex: visitar a página inicial),
 * que podem ser consumidos por múltiplos arquivos .feature distintos.
 */
const { Given } = require('@badeball/cypress-cucumber-preprocessor');
const HomePage = Cypress.PageObjects.HomePage;

Given('que acesso a pagina inicial', () => {
  // Essencial como estado zero (pré-condição) da maioria dos fluxos BDD
  HomePage.visit();
});
