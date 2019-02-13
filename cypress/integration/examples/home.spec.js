/// <reference types="Cypress" />

describe('Home Cypress:', () => {

  beforeEach(() => {
    cy.visit('/');
  })

  it('succesfully performs init page', () => {
    cy.contains('Example Store Redux');

    cy.get('#increment-button').click();

    cy.get('#increment-button')
      .should('have.class', 'btn-success')
      .and('contain', 'Increment via redux');

    // search for a div with 'Teachers' caption, and click it
    // cy.get('a[data-testid="main-link-teachers"]').click();
    // check if url have changed
    // cy.url().should('includes', 'teachers');
    // cy.contains('more time to teach');
    // get Login button and click it
    // cy.get('button[data-testid="menu-button-login"]').click();
    // check if url have changed
    // cy.url().should('includes', '/login');
    // submit inputs and click submit button
    // cy.get('input[data-testid="login-form-username"]').type('test@email.com');
    // cy.get('input[data-testid="login-form-password"]').type('password');
    // cy.get('button[data-testid="login-form-submit"]').click();
    // verify that we were redirected
    // cy.url({
    //   timeout: 3000
    // }).should('includes', '/c/');
  });
});