describe('The Error Page  e2e test', () => {
  it('successfully loads when pathname is invalid or error', () => {
    const errorPathName = 'ggg';
    cy.visit(`/${errorPathName}`);

    cy.get('.page-404__title').should('have.text', 'Page not found!');
  });
});
