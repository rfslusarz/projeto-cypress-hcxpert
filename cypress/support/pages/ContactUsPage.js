class ContactUsPage {
  visit() {
    cy.visit('/contact_us');
  }

  fillName(name) {
    cy.get('[data-qa="name"]').clear().type(name);
  }

  fillEmail(email) {
    cy.get('[data-qa="email"]').clear().type(email);
  }

  fillSubject(subject) {
    cy.get('[data-qa="subject"]').clear().type(subject);
  }

  fillMessage(message) {
    cy.get('[data-qa="message"]').clear().type(message);
  }

  attachFile(filePath) {
    cy.get('input[name="upload_file"]').selectFile(filePath, { force: true });
  }

  submit() {
    cy.get('[data-qa="submit-button"]').click();
  }

  getSuccessMessage() {
    return cy.get('.status.alert.alert-success');
  }

  fillForm(name, email, subject, message) {
    this.fillName(name);
    this.fillEmail(email);
    this.fillSubject(subject);
    this.fillMessage(message);
  }
}

module.exports = new ContactUsPage();
