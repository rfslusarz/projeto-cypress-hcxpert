const {
  Given,
  When,
  Then,
} = require("@badeball/cypress-cucumber-preprocessor");
const HomePage = Cypress.PageObjects.HomePage;
const ProductsPage = Cypress.PageObjects.ProductsPage;
const CartPage = Cypress.PageObjects.CartPage;
const CheckoutPage = Cypress.PageObjects.CheckoutPage;
const LoginPage = Cypress.PageObjects.LoginPage;

Given("adiciono o produto {string} ao carrinho", (productName) => {
  ProductsPage.visit();
  ProductsPage.addProductToCartByName(productName);
  cy.get(".modal").within(() => {
    cy.contains("Continue Shopping").click();
  });
});

When("acesso o carrinho", () => {
  HomePage.clickCart();
});

Then("devo ver o produto {string} no carrinho", (productName) => {
  CartPage.getProductInCart(productName).should("be.visible");
});

When("prosseguo para o checkout", () => {
  CartPage.proceedToCheckout();
});

When("realizo login com {string} e {string}", (email, password) => {
  CheckoutPage.clickRegisterLogin();
  LoginPage.login(email, password);
});

When("prosseguo novamente para o checkout", () => {
  CartPage.visit();
  CartPage.proceedToCheckout();
});

When("preencho o comentario do pedido e clico em Place Order", () => {
  CheckoutPage.fillPlaceOrderComment("Order comment - automation test");
  CheckoutPage.clickPlaceOrder();
});

When("preencho os dados do cartao", () => {
  CheckoutPage.fillCardName("Test User");
  CheckoutPage.fillCardNumber("4111111111111111");
  CheckoutPage.fillCvc("123");
  CheckoutPage.fillExpiry("12", "2025");
});

When("confirmo o pagamento", () => {
  CheckoutPage.clickPayAndConfirm();
});

Then("devo ver a mensagem de confirmacao do pedido", () => {
  CheckoutPage.getOrderPlacedMessage().should("be.visible");
});
