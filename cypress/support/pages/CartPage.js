/**
 * Page Object para a página de Carrinho (Cart).
 * Encapsula os elementos e interações da página de carrinho,
 * centralizando a manutenção caso a estrutura do HTML mude.
 */
class CartPage {
  /**
   * Navega diretamente para a página de visualização do carrinho.
   */
  visit() {
    cy.visit('/view_cart');
  }

  /**
   * Retorna os itens presentes na tabela do carrinho.
   * Utilizado para validar a quantidade de produtos ou iterar sobre eles.
   */
  getCartItems() {
    return cy.get('#cart_info_table tbody tr');
  }

  /**
   * Busca um produto específico na listagem do carrinho pelo seu nome.
   * @param {string} productName - Nome exato do produto conforme exibido no carrinho.
   */
  getProductInCart(productName) {
    return cy.get('#cart_info_table').contains('td', productName);
  }

  /**
   * Inicia o fluxo de pagamento clicando no botão de Proceed To Checkout.
   */
  proceedToCheckout() {
    cy.contains('a', 'Proceed To Checkout').click();
  }

  /**
   * Retorna o aviso de que o carrinho está vazio.
   * Útil para asserções de remoção ou estado inicial do carrinho.
   */
  getEmptyCartMessage() {
    return cy.get('.text-center').contains('Cart is empty');
  }
}

export default new CartPage();
