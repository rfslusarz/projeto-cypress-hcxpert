/**
 * Page Object para a página global de Produtos.
 * Centraliza interações em filtros laterais, seleção de categorias
 * e ações nos cards resumidos da vitrine.
 */
class ProductsPage {
  /**
   * Acessa a página genérica de listagem de produtos da loja.
   */
  visit() {
    cy.visit('/products');
  }

  /**
   * Expande a categoria "Women" no menu lateral para revelar as subcategorias.
   */
  clickWomenCategory() {
    cy.get('a[href="#Women"]').first().click();
  }

  /**
   * Clica dinamicamente em uma subcategoria de "Women".
   * A categoria principal deve estar previamente expandida.
   * @param {string} categoryName - Nome visível da categoria desejada.
   */
  clickCategoryLink(categoryName) {
    cy.get('#Women').within(() => {
      cy.contains('a', categoryName.trim()).click();
    });
  }

  /**
   * Atalho para clicar especificamente na subcategoria "Dress".
   */
  clickCategoryDress() {
    cy.get('#Women').contains('a', 'Dress').click();
  }

  /**
   * Atalho para clicar especificamente na subcategoria "Tops".
   */
  clickCategoryTops() {
    cy.get('#Women').contains('a', 'Tops').click();
  }

  /**
   * Atalho para clicar especificamente na subcategoria "Saree".
   */
  clickCategorySaree() {
    cy.get('#Women').contains('a', 'Saree').click();
  }

  /**
   * Filtra os produtos da vitrine especificamente para a marca "Madame".
   */
  clickBrandMadame() {
    cy.contains('a', 'Madame').click();
  }

  /**
   * Retorna o elemento HTML do primeiro card de produto visível no grid geral.
   */
  getFirstProduct() {
    return cy.get('.productinfo').first();
  }

  /**
   * Localiza o elemento agregador (card) do produto baseando-se no seu nome.
   * @param {string} productName - O nome exato que aparece no título do produto.
   */
  getProductByName(productName) {
    return cy.get('.productinfo').contains('p', productName).parents('.productinfo');
  }

  /**
   * Adiciona o primeiro produto do grid de produtos carregados ao carrinho.
   */
  addFirstProductToCart() {
    cy.get('.productinfo').first().contains('a', 'Add to cart').click();
  }

  /**
   * Clica no link para acessar os detalhes mais profundos do primeiro produto visível.
   */
  viewFirstProduct() {
    cy.get('.productinfo').first().contains('a', 'View Product').click();
  }

  /**
   * Adiciona um produto iterativo ao carrinho baseando-se na sua ordem/index na tela.
   * Utilizado quando a ordem dos elementos num grid é previsível e estável.
   * @param {number} index - O índice (base zero) do produto no grid.
   */
  addProductToCartByIndex(index) {
    cy.get('.productinfo').eq(index).contains('a', 'Add to cart').click();
  }
}

export default new ProductsPage();
