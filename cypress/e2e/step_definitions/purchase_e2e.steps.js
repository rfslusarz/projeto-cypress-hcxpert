/**
 * Step Definitions para o fluxo de Ponta a Ponta (E2E) de Compra.
 * Orquestra as navegações pesadas, integração entre carrinho, 
 * checkout e confirmação de pagamento simulado.
 */
const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');
const HomePage = Cypress.PageObjects.HomePage;
const CartPage = Cypress.PageObjects.CartPage;
const CheckoutPage = Cypress.PageObjects.CheckoutPage;
const LoginPage = Cypress.PageObjects.LoginPage;

Given('adiciono o produto {string} ao carrinho', (productName) => {
  // Ação desencadeia um modal assíncrono na interface web antes de ir para o cart
  HomePage.getFirstProductAddToCart().click();
  cy.get('.modal').within(() => {
    cy.contains('a', 'View Cart').click();
  });
});

When('acesso o carrinho', () => {
  HomePage.clickCart();
});

Then('devo ver o produto {string} no carrinho', (productName) => {
  // Verificação baseada no nome da string parametrizada provida via BDD
  CartPage.getProductInCart(productName).should('be.visible');
});

When('prosseguo para o checkout', () => {
  CartPage.proceedToCheckout();
});

When('realizo login com {string} e {string}', (email, password) => {
  // Durante o checkout deslogado, é necessário se autenticar antes de prosseguir
  CheckoutPage.clickRegisterLogin();
  LoginPage.login(email, password);
});

When('prosseguo novamente para o checkout', () => {
  // Tendo logado, retomamos a rota do carrinho para continuar a finalização da compra iniciada
  CartPage.visit();
  CartPage.proceedToCheckout();
});

When('preencho o comentario do pedido e clico em Place Order', () => {
  CheckoutPage.fillPlaceOrderComment('Order comment - automation test');
  CheckoutPage.clickPlaceOrder();
});

When('preencho os dados do cartao', () => {
  // Hardcoded values pois se trata de um mock de gateway de pagamento do site
  CheckoutPage.fillCardName('Test User');
  CheckoutPage.fillCardNumber('4111111111111111');
  CheckoutPage.fillCvc('123');
  CheckoutPage.fillExpiry('12', '2025');
});

When('confirmo o pagamento', () => {
  CheckoutPage.clickPayAndConfirm();
});

Then('devo ver a mensagem de confirmacao do pedido', () => {
  // Etapa crucial do script E2E, a materialização lógica da compra
  CheckoutPage.getOrderPlacedMessage().should('be.visible');
});

