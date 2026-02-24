class CheckoutPage {
  getRegisterLoginLink() {
    return cy.contains('a', 'Register / Login');
  }

  clickRegisterLogin() {
    this.getRegisterLoginLink().click();
  }

  fillPlaceOrderComment(comment) {
    cy.get('textarea[name="message"]').clear().type(comment);
  }

  clickPlaceOrder() {
    cy.contains('a', 'Place Order').click();
  }

  fillCardName(name) {
    cy.get('input[name="name_on_card"]').type(name);
  }

  fillCardNumber(number) {
    cy.get('input[name="card_number"]').type(number);
  }

  fillCvc(cvc) {
    cy.get('input[name="cvc"]').type(cvc);
  }

  fillExpiry(month, year) {
    cy.get('input[name="expiry_month"]').type(month);
    cy.get('input[name="expiry_year"]').type(year);
  }

  clickPayAndConfirm() {
    cy.contains('button', 'Pay and Confirm Order').click();
  }

  getSuccessMessage() {
    return cy.get('#success_message');
  }

  getOrderPlacedMessage() {
    return cy.contains('Congratulations! Your order has been confirmed!');
  }
}

module.exports = new CheckoutPage();
