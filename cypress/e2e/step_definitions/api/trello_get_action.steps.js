const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

const TrelloActionsClient = require('../../../support/api/TrelloActionsClient');

Given('que eu consulto a Trello Actions API para um action fixo', () => {
  TrelloActionsClient.getAction().then((response) => {
    cy.wrap(response).as('trelloResponse');
    const baseUrl = Cypress.env('trelloApiBaseUrl') || 'https://api.trello.com/1';
    const actionId = Cypress.env('trelloActionId') || '592f11060f95a3d3d46a987a';
    const requestInfo = `GET ${baseUrl}/actions/${actionId}`;
    cy.allure().attachment('Request', requestInfo, 'text/plain');
    cy.allure().attachment('Response Body', JSON.stringify(response.body, null, 2), 'application/json');
  });
});

When('eu envio a requisicao GET', () => {
  cy.get('@trelloResponse').should('exist');
});

Then('o status code deve ser 200', () => {
  cy.get('@trelloResponse').then((response) => {
    expect(response.status).to.eq(200);
  });
});

Then('eu devo exibir o valor de {string}', (path) => {
  cy.get('@trelloResponse').then((response) => {
    expect(response.body).to.have.nested.property(path);
    const value = response.body.data.list.name;
    expect(value).to.be.a('string').and.not.be.empty;
    cy.log(`data.list.name = ${value}`);
    cy.allure().attachment('data.list.name', value, 'text/plain');
  });
});
