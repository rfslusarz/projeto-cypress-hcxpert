/**
 * Page Object para a página inicial (Home).
 * Como a Home costuma ser o ponto de partida na navegação e contém elementos 
 * do menu superior global, os seletores aqui definidos devem ser resilientes.
 */
class HomePage {
  /**
   * Navega para a raiz da aplicação.
   */
  visit() {
    cy.visit('/');
  }

  /**
   * Acessa a listagem completa de produtos.
   */
  clickProducts() {
    cy.get('a[href="/products"]').click();
  }

  /**
   * Navaga diretamente para o carrinho através do header.
   */
  clickCart() {
    cy.get('a[href="/view_cart"]').click();
  }

  /**
   * Clica no link de Login/SignUp localizado no header global.
   */
  clickLogin() {
    cy.get('a[href="/login"]').click();
  }

  /**
   * Acessa a página de "Contact Us".
   */
  clickContactUs() {
    cy.get('a[href="/contact_us"]').click();
  }

  /**
   * Clica no link para os tutoriais externos no Youtube.
   */
  clickVideoTutorials() {
    cy.get('a[href="https://www.youtube.com/c/AutomationExercise"]').click();
  }

  /**
   * Retorna o elemento âncora do link de tutoriais.
   * Utilizado muitas vezes para asserções de atributos `href` sem acionar navegação.
   */
  getVideoTutorialsLink() {
    return cy.get('a[href*="youtube.com/c/AutomationExercise"]');
  }

  /**
   * Expande a categoria "Women" na sidebar lateral.
   */
  clickWomenCategory() {
    cy.get('a[href="#Women"]').click();
  }

  /**
   * Clica em uma subcategoria específica da seção "Women".
   * Depende da seção já estar expandida previamente.
   * @param {string} categoryName - Nome visível da categoria (ex: "Dress", "Tops").
   */
  clickCategoryLink(categoryName) {
    cy.get('#Women').within(() => {
      cy.contains('a', categoryName.trim()).click();
    });
  }

  /**
   * Filtra os produtos pela marca Madame utilizando as listas na sidebar lateral.
   */
  clickBrandMadame() {
    cy.contains('a', 'Madame').click();
  }

  /**
   * Captura o botão "Add to cart" do primeiro produto visível no grid geral.
   */
  getFirstProductAddToCart() {
    return cy.get('.productinfo').first().contains('a', 'Add to cart');
  }

  /**
   * Busca um produto dinamicamente pela seção de itens recomendados ("Recommended Items") e 
   * retorna o respectivo botão de compra.
   * @param {string} productName - Nome exato exibido no card do produto.
   */
  getRecommendedProductAddToCart(productName) {
    return cy.get('.recommended_items').contains('.productinfo', productName).contains('a', 'Add to cart');
  }
}

export default new HomePage();
