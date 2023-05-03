describe('The Home Page e2e test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('successfully loads', () => {
    // cy.visit('http://localhost:3000'); // change URL to match your dev URL
    cy.visit('/');
    cy.get('.page__title').should('have.text', 'HomePage');
  });

  it('should have a search panel', () => {
    cy.get('input.search-panel').should('have.value', '');
  });
});
