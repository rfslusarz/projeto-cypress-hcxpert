const {
  Given,
  When,
  Then,
} = require("@badeball/cypress-cucumber-preprocessor");
const ContactUsPage = Cypress.PageObjects.ContactUsPage;

Given("que acesso a pagina Contact Us", () => {
  ContactUsPage.visit();
});

When(
  "preencho o formulario com nome {string}, email {string}, assunto {string} e mensagem {string}",
  (name, email, subject, message) => {
    ContactUsPage.fillForm(name, email, subject, message);
  },
);

When("anexo o arquivo sample.txt", () => {
  ContactUsPage.attachFile("cypress/fixtures/sample.txt");
});

When("clico em Submit", () => {
  ContactUsPage.submit();
});

Then("devo ver a mensagem de sucesso do Contact Us", () => {
  ContactUsPage.getSuccessMessage()
    .should("be.visible")
    .and(
      "contain.text",
      "Success! Your details have been submitted successfully.",
    );
});
