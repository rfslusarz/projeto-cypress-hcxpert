Cypress.Commands.add('acceptAlert', () => {
  cy.on('window:alert', (str) => {
    expect(str).to.include('Added!');
  });
});
