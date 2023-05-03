describe('The About Page  e2e test', () => {
  it('successfully loads', () => {
    cy.visit('/about');

    cy.get('.page__title').should('have.text', 'About us');
  });
});
