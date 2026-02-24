/**
 * Step Definitions para a funcionalidade Fale Conosco (Contact Us).
 * Conecta os testes textuais de suporte e ouvidoria à automação do frontend web.
 */
const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');
const ContactUsPage = Cypress.PageObjects.ContactUsPage;

Given('que acesso a pagina Contact Us', () => {
  ContactUsPage.visit();
});

When('preencho o formulario com nome {string}, email {string}, assunto {string} e mensagem {string}', (name, email, subject, message) => {
  // Acelera o teste combinando múltiplos steps lógicos em uma única ação macro
  ContactUsPage.fillForm(name, email, subject, message);
});

When('anexo o arquivo sample.txt', () => {
  // Testa a feature crítica de upload de arquivos providenciando um arquivo predefinido em fixtures
  ContactUsPage.attachFile('cypress/fixtures/sample.txt');
});

When('clico em Submit', () => {
  ContactUsPage.submit();
});

Then('devo ver a mensagem de sucesso do Contact Us', () => {
  // Valida que todo o evento de form_submit foi disparado,
  // resultando no recebimento e processamento real do backend
  ContactUsPage.getSuccessMessage()
    .should('be.visible')
    .and('contain.text', 'Success! Your details have been submitted successfully.');
});
