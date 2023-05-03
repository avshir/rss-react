describe('The Form Page e2e test', () => {
  it('successfully loads', () => {
    cy.visit('/form');
    cy.get('.page__title').should('have.text', 'Form page');

    //'should have a form'
    cy.get('#add-card-form');

    cy.get('input.user-name').should('have.value', '');
    cy.get('button[type=submit]').should('have.text', 'Submit');
  });

  it('should show an error, if type only one input and the other fields are empty', () => {
    cy.visit('/form');

    cy.get('input.user-name').type('Anna Shir');
    cy.get('input.user-name').should('have.value', 'Anna Shir');

    cy.contains('Submit').click();
    //todo
    // cy.get('span:nth-of-type(2)').should('have.text', 'Enter date of your birthday');
  });

  it('should the form is cleared after the reset button is pressed', () => {
    cy.visit('/form');

    cy.get('input.user-name').type('Anna Shir');
    cy.get('input.user-name').should('have.value', 'Anna Shir');

    cy.contains('Reset').click();
    cy.get('input.user-name').should('have.value', '');
  });

  it('should the form is filled out and the card is created after submit form and the form is cleared', () => {
    cy.visit('/form');

    cy.get('input.user-name').type('Anna Shir');
    cy.get('input.user-name').should('have.value', 'Anna Shir');

    cy.get('input[type="date"]').type('2022-01-01');
    cy.get('input[type="date"]').should('have.value', '2022-01-01');

    cy.get('select').select('Poland');
    cy.get('select').should('have.value', 'Poland');

    cy.get('input[type="radio"]').check('male');
    cy.get('input[type="radio"][value="male"]').should('be.checked');
    cy.get('input[type="radio"][value="female"]').should('not.be.checked');

    cy.get('textarea').type('My feedback here');
    cy.get('textarea').should('have.value', 'My feedback here');

    cy.get('input[type="checkbox"]').check();
    cy.get('input[type="checkbox"]').should('be.checked');

    cy.get('input[type=file]').selectFile({
      contents: Cypress.Buffer.from('file contents'),
      fileName: 'file.jpg',
      lastModified: Date.now(),
    });

    cy.contains('Submit').click();
    // check the form is cleared
    cy.get('input.user-name').should('have.value', '');

    //create the card
    cy.get('.card__title').should('have.text', 'Anna Shir');
    cy.get('.card__country').should('have.text', 'Poland');
  });
});
