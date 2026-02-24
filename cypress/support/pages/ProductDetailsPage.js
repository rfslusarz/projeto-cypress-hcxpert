class ProductDetailsPage {
  getProductName() {
    return cy.get(".product-information h2").last();
  }

  getProductBrand() {
    return cy.get(".product-information p").contains("Brand");
  }

  getQuantityInput() {
    return cy.get("#quantity");
  }

  addToCart() {
    cy.get("button").contains("Add to cart").click();
  }

  setQuantity(quantity) {
    this.getQuantityInput().clear().type(quantity);
  }

  proceedToCheckout() {
    cy.contains("a", "Proceed to Checkout").click();
  }

  continueShopping() {
    cy.contains("button", "Continue Shopping").click();
  }
}

module.exports = new ProductDetailsPage();
