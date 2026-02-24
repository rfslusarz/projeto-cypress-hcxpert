class HomePage {
  visit() {
    cy.visit("/");
  }

  clickProducts() {
    cy.get('a[href="/products"]').click();
  }

  clickCart() {
    cy.get('a[href="/view_cart"]').first().click();
  }

  clickLogin() {
    cy.get('a[href="/login"]').click();
  }

  clickContactUs() {
    cy.get('a[href="/contact_us"]').click();
  }

  clickVideoTutorials() {
    cy.get('a[href="https://www.youtube.com/c/AutomationExercise"]').click();
  }

  clickVideoTutorialsInPlace() {
    cy.get('a[href*="youtube.com/c/AutomationExercise"]')
      .invoke("removeAttr", "target")
      .click();
  }

  getVideoTutorialsLink() {
    return cy.get('a[href*="youtube.com/c/AutomationExercise"]');
  }

  clickWomenCategory() {
    cy.get('a[href="#Women"]').click();
  }

  clickCategoryLink(categoryName) {
    cy.get("#Women").within(() => {
      cy.contains("a", categoryName.trim()).click();
    });
  }

  clickBrandMadame() {
    cy.contains("a", "Madame").click();
  }

  getFirstProductAddToCart() {
    return cy.get(".productinfo").first().contains("a", "Add to cart");
  }

  getRecommendedProductAddToCart(productName) {
    return cy
      .get(".recommended_items")
      .contains(".productinfo", productName)
      .contains("a", "Add to cart");
  }
}

module.exports = new HomePage();
