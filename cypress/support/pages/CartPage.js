class CartPage {
  visit() {
    cy.visit("/view_cart");
  }

  getCartItems() {
    return cy.get("#cart_info_table tbody tr");
  }

  getProductInCart(productName) {
    return cy.get("#cart_info_table").contains("td", productName);
  }

  proceedToCheckout() {
    cy.contains("a", "Proceed To Checkout").click();
  }

  getEmptyCartMessage() {
    return cy.get(".text-center").contains("Cart is empty");
  }
}

module.exports = new CartPage();
