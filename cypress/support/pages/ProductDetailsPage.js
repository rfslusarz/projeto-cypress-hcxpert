/**
 * Page Object para a página de Detalhes do Produto.
 * Encapsula interações específicas de um único produto, como
 * visualização de detalhes, alteração de quantidade e adição ao carrinho.
 */
class ProductDetailsPage {
  /**
   * Retorna o elemento de título (nome) do produto em destaque.
   */
  getProductName() {
    return cy.get('.product-information h2').last();
  }

  /**
   * Retorna o elemento de marca (brand) do produto, para validações de metadados.
   */
  getProductBrand() {
    return cy.get('.product-information p').contains('Brand');
  }

  /**
   * Retorna o campo de input numérico de quantidade do produto a ser comprado.
   */
  getQuantityInput() {
    return cy.get('#quantity');
  }

  /**
   * Aciona a inclusão do produto atual no carrinho com as configurações selecionadas.
   */
  addToCart() {
    cy.get('button').contains('Add to cart').click();
  }

  /**
   * Define uma quantidade específica de itens para compra.
   * @param {string|number} quantity - O volume de produtos desejado.
   */
  setQuantity(quantity) {
    this.getQuantityInput().clear().type(quantity);
  }

  /**
   * Inicia o fluxo de pagamento pelo atalho exibido na página do produto.
   */
  proceedToCheckout() {
    cy.contains('a', 'Proceed to Checkout').click();
  }

  /**
   * Fecha o modal/aviso de sucesso e mantém o usuário navegando na loja.
   */
  continueShopping() {
    cy.contains('button', 'Continue Shopping').click();
  }
}

export default new ProductDetailsPage();
