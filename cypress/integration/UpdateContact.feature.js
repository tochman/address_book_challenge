/*
As a user
In order to keep my friends' contact details accurate
I would like to be able to update them when needed
*/


describe('changing the data and clicking the "Update" button', () => {
  before(() => {
    cy.visit('http://localhost:3001')
    cy.get('#add-contact').click()
    cy.get('#name').type('Robin')
    cy.get('#email').type('robin@abacuz.se')
    cy.get('#phone').type('0700101010')
    cy.get('#company').type('Craft Academy')
    cy.get('#notes').type('Awesome coder')
    cy.get('#twitter').type('Abacuz08')
    cy.get('#submit').click()
  })

  it('uppdates the contact', () => {
      // cy.pause()
      cy.get('.update-button').click()

    cy.get('#new-contact-form').within(()=> {
      cy.get('#name').clear().type('Thomas')
      cy.get('#email').clear().type('thomas@craft.se')
      cy.get('#submit').click()
    })

    // cy.contains('robin@abacuz.se').should('not.exist')
  })
});
