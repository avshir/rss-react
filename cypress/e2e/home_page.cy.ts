describe('The Home Page e2e test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('successfully loads', () => {
    // cy.visit('http://localhost:3000'); // change URL to match your dev URL
    cy.visit('/');
    cy.get('.page__title').should('have.text', 'HomePage');
  });

  it('should have a search panel with empty value', () => {
    cy.get('input.search-panel').should('have.value', '');
  });

  it('should show 20 trending movies with empty value in search-panel', () => {
    cy.get('input.search-panel').should('have.value', '');
    cy.get('.cards-list__item').should('have.length', 20);
  });

  it('should type in search-panel word "ava", press "Enter" and will search 20 films with this word in title', () => {
    cy.get('input.search-panel').type('ava{enter}');

    cy.get('input.search-panel').should('have.value', 'ava');
    cy.get('.cards-list__item').should('have.length', 20);
    cy.get('li:first-of-type.cards-list__item ').should('be.visible');
  });

  it('should open modal window for the first card and close modal window', () => {
    const filmTitle = 'Lupin The 3rd vs. Cat’s Eye';

    cy.get('input.search-panel').type('cat{enter}');
    cy.get('input.search-panel').should('have.value', 'cat');

    cy.get('ul[data-testid="cards-list"]').should('be.visible');

    cy.get('li:first-of-type .card-item__button').click();
    cy.get('div[data-testid="modal"]').should('be.visible');
    cy.get('div[data-testid="modal"] .detail-info__title').should('have.text', filmTitle);

    cy.get('[data-testid="close-modal"]').click();
    cy.get('div[data-testid="modal"]').should('not.exist');
  });

  it('should save search cards when routing to another page and back to the homePage ', () => {
    cy.get('input.search-panel').type('dog{enter}');
    cy.get('input.search-panel').should('have.value', 'dog');

    cy.get('li:first-of-type.cards-list__item ').should('be.visible');

    cy.get('a[href="/form"]').click();
    cy.get('a[href="/"]').click();

    cy.get('input.search-panel').should('have.value', 'dog');
    cy.get('li:first-of-type.cards-list__item ').should('be.visible');
  });
});
