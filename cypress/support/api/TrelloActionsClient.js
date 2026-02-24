class TrelloActionsClient {
  constructor() {
    this.baseUrl = Cypress.env('trelloApiBaseUrl') || 'https://api.trello.com/1';
    this.defaultActionId = Cypress.env('trelloActionId') || '592f11060f95a3d3d46a987a';
  }

  getAction(actionId) {
    const id = actionId || this.defaultActionId;
    const url = `${this.baseUrl}/actions/${id}`;
    return cy.request({
      method: 'GET',
      url,
      failOnStatusCode: false
    });
  }
}

module.exports = new TrelloActionsClient();
