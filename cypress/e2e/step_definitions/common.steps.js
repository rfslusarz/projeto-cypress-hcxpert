const { Given } = require("@badeball/cypress-cucumber-preprocessor");
const HomePage = Cypress.PageObjects.HomePage;

Given("que acesso a pagina inicial", () => {
  HomePage.visit();
});
