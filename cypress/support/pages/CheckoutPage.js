/**
 * Page Object para a página e processo de Finalização de Compra (Checkout).
 * Contém o agrupamento de informações de entrega, de faturamento
 * e processamento de cartão, unificando a rotina de concluir pedidos.
 */
class CheckoutPage {
  /**
   * Retorna o link para ação de Registrar ou Logar durante
   * navegação do checkout deslogado.
   */
  getRegisterLoginLink() {
    return cy.contains('a', 'Register / Login');
  }

  /**
   * Clica e redireciona para a autenticação se o cliente
   * tentar finalizar a compra como Guest.
   */
  clickRegisterLogin() {
    this.getRegisterLoginLink().click();
  }

  /**
   * Insere um comentário descritivo para o time de preparação do pedido.
   * @param {string} comment - Observações adicionais do cliente.
   */
  fillPlaceOrderComment(comment) {
    cy.get('textarea[name="message"]').clear().type(comment);
  }

  /**
   * Transita do resumo do carrinho de checkout para a janela final
   * de provimento dos dados do cartão.
   */
  clickPlaceOrder() {
    cy.contains('a', 'Place Order').click();
  }

  /**
   * Insere o nome do titular do cartão de crédito.
   * @param {string} name - Nome estampado no cartão.
   */
  fillCardName(name) {
    cy.get('input[name="name_on_card"]').type(name);
  }

  /**
   * Insere a numeração do cartão.
   * @param {string} number - Código do cartão sem máscara.
   */
  fillCardNumber(number) {
    cy.get('input[name="card_number"]').type(number);
  }

  /**
   * Insere o código de segurança do cartão.
   * @param {string} cvc - Código de verificação (CVV/CVC).
   */
  fillCvc(cvc) {
    cy.get('input[name="cvc"]').type(cvc);
  }

  /**
   * Preenche as datas combinadas de expiração do cartão de crédito.
   * @param {string} month - Mês com 2 dígitos.
   * @param {string} year - Ano com 4 dígitos.
   */
  fillExpiry(month, year) {
    cy.get('input[name="expiry_month"]').type(month);
    cy.get('input[name="expiry_year"]').type(year);
  }

  /**
   * Finaliza pagando a transação e convertendo em um pedido na base de dados.
   */
  clickPayAndConfirm() {
    cy.contains('button', 'Pay and Confirm Order').click();
  }

  /**
   * Retorna o contêiner generalizado que comprova validação bem sucedida de steps
   * do checkout.
   */
  getSuccessMessage() {
    return cy.get('#success_message');
  }

  /**
   * Retorna explicitamente o popover/mensagem final confirmando
   * que a transação foi aceita com êxito.
   */
  getOrderPlacedMessage() {
    return cy.contains('Congratulations! Your order has been confirmed!');
  }
}

export default new CheckoutPage();
