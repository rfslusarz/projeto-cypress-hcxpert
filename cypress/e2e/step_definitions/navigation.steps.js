const {
  Given,
  When,
  Then,
} = require("@badeball/cypress-cucumber-preprocessor");
const HomePage = Cypress.PageObjects.HomePage;
const ProductsPage = Cypress.PageObjects.ProductsPage;

Given("que acesso a pagina de produtos", () => {
  ProductsPage.visit();
});

When("clico em Products", () => {
  HomePage.clickProducts();
});

When("clico na categoria Women", () => {
  ProductsPage.clickWomenCategory();
});

When("clico na subcategoria {string}", (categoryName) => {
  ProductsPage.clickCategoryLink(categoryName);
});

When("clico no link da marca Madame", () => {
  HomePage.clickBrandMadame();
});

When("clico em Video Tutorials", () => {
  cy.intercept("https://www.youtube.com/**", "<html><body>Mock YouTube</body></html>").as("youtube");
  HomePage.clickVideoTutorialsInPlace();
});

Then("devo estar na pagina de produtos", () => {
  cy.url().should("include", "/products");
});

Then("a URL deve conter {string}", (urlPart) => {
  cy.url().should("include", urlPart);
});

Then("devo ver produtos da categoria", () => {
  cy.get(".productinfo").should("have.length.at.least", 1);
});

Then("devo estar na pagina de produtos Madame", () => {
  cy.url().should("include", "Madame");
});

Then("devo ver pelo menos um produto", () => {
  cy.get(".productinfo").should("have.length.at.least", 1);
});

Then("devo ser redirecionado para o canal do YouTube", () => {
  cy.origin("https://www.youtube.com", () => {
    cy.url().should("include", "youtube.com/c/AutomationExercise");
  });
});
