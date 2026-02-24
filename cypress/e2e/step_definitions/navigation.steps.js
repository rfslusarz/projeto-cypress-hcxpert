/**
 * Step Definitions para Navegação Geral.
 * Abrange transições entre páginas, filtragem de categorias, sidebars 
 * e interações diversas que guiam o fluxo de e-commerce sem focar em checkout.
 */
const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');
const HomePage = Cypress.PageObjects.HomePage;
const ProductsPage = Cypress.PageObjects.ProductsPage;

Given('que acesso a pagina de produtos', () => {
  ProductsPage.visit();
});

When('clico em Products', () => {
  HomePage.clickProducts();
});

When('clico na categoria Women', () => {
  // Necessário expandir o colapsável principal para a ação posterior
  ProductsPage.clickWomenCategory();
});

When('clico na subcategoria {string}', (categoryName) => {
  // Ação injeta um parâmetro BDD na chamada de comando
  ProductsPage.clickCategoryLink(categoryName);
});

When('clico no link da marca Madame', () => {
  HomePage.clickBrandMadame();
});

When('clico em Video Tutorials', () => {
  // Esta ação usualmente engatilha a abertura de uma nova aba em sistemas web reais
  HomePage.clickVideoTutorials();
});

When('verifico o link Video Tutorials', () => {
  HomePage.getVideoTutorialsLink().should('exist');
});

Then('devo estar na pagina de produtos', () => {
  // Validações de roteamento e mudança de contexto
  cy.url().should('include', '/products');
});

Then('a URL deve conter {string}', (urlPart) => {
  // Validação dinâmica e genérica para testar múltiplas transições
  cy.url().should('include', urlPart);
});

Then('devo ver produtos da categoria', () => {
  // Garante que o retorno do servidor/backend listou pelo menos um item válido
  cy.get('.productinfo').should('have.length.at.least', 1);
});

Then('devo estar na pagina de produtos Madame', () => {
  cy.url().should('include', 'Madame');
});

Then('devo ver pelo menos um produto', () => {
  cy.get('.productinfo').should('have.length.at.least', 1);
});

Then('devo ser redirecionado para o canal do YouTube', () => {
  cy.url().should('include', 'youtube.com');
});

Then('o link deve apontar para o canal do YouTube', () => {
  // Optamos por validar o atributo <a href="..."> diretamente para viabilizar 
  // que o teste funcione sem abrir e lidar com navegação cross-origin na outra aba
  HomePage.getVideoTutorialsLink()
    .should('have.attr', 'href')
    .and('include', 'youtube.com/c/AutomationExercise');
});

