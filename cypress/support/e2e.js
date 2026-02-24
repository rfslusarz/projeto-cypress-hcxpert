require('./commands');
require('@shelex/cypress-allure-plugin');

const HomePage = require('./pages/HomePage');
const LoginPage = require('./pages/LoginPage');
const ProductsPage = require('./pages/ProductsPage');
const ProductDetailsPage = require('./pages/ProductDetailsPage');
const CartPage = require('./pages/CartPage');
const CheckoutPage = require('./pages/CheckoutPage');
const ContactUsPage = require('./pages/ContactUsPage');

Cypress.PageObjects = {
  HomePage,
  LoginPage,
  ProductsPage,
  ProductDetailsPage,
  CartPage,
  CheckoutPage,
  ContactUsPage
};
