require('./commands');
require('@shelex/cypress-allure-plugin');

const HomePage = require('./pages/HomePage').default;
const LoginPage = require('./pages/LoginPage').default;
const ProductsPage = require('./pages/ProductsPage').default;
const ProductDetailsPage = require('./pages/ProductDetailsPage').default;
const CartPage = require('./pages/CartPage').default;
const CheckoutPage = require('./pages/CheckoutPage').default;
const ContactUsPage = require('./pages/ContactUsPage').default;

Cypress.PageObjects = {
  HomePage,
  LoginPage,
  ProductsPage,
  ProductDetailsPage,
  CartPage,
  CheckoutPage,
  ContactUsPage
};
