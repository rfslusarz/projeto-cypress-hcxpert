class ProductsPage {
  visit() {
    cy.visit("/products");
  }

  clickWomenCategory() {
    cy.get('a[href="#Women"]').first().click();
  }

  clickCategoryLink(categoryName) {
    cy.get("#Women").within(() => {
      cy.contains("a", categoryName.trim()).click();
    });
  }

  clickCategoryDress() {
    cy.get("#Women").contains("a", "Dress").click();
  }

  clickCategoryTops() {
    cy.get("#Women").contains("a", "Tops").click();
  }

  clickCategorySaree() {
    cy.get("#Women").contains("a", "Saree").click();
  }

  clickBrandMadame() {
    cy.contains("a", "Madame").click();
  }

  getFirstProduct() {
    return cy.get(".productinfo").first();
  }

  getProductByName(productName) {
    return cy
      .get(".productinfo")
      .contains("p", productName)
      .parents(".productinfo");
  }

  addFirstProductToCart() {
    cy.get(".productinfo").first().contains("a", "Add to cart").click();
  }

  addProductToCartByName(productName) {
    this.getProductByName(productName).contains("a", "Add to cart").click();
  }

  addProductToCartByIndex(index) {
    cy.get(".productinfo").eq(index).contains("a", "Add to cart").click();
  }

  viewFirstProduct() {
    cy.get(".productinfo").first().contains("a", "View Product").click();
  }
}

module.exports = new ProductsPage();
