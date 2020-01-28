/* 
As a user
In order to keep my contact list up to date
I would like to be able to delete contacts
*/
before(() => {
    cy.visit('http://localhost:3001')
})

it('0. Setup contact to delete', () => {
    cy.get('#add-contact').click()
    cy.get('#name').type('Robin')
    cy.get('#email').type('robin@abacuz.se')
    cy.get('#phone').type('0700101010')
    cy.get('#company').type('Craft Academy')
    cy.get('#notes').type('Awesome coder')
    cy.get('#twitter').type('Abacuz08')
    cy.get('#submit').click()
})

it('1. Displays a name of the new contact', () => {
    cy.get('#contact-list').should('contain', 'Robin')
})

it('2. Displays a name of the new contact', () => {
    cy.get('.deleteButton').click()
    //cy.get('#deleteButton').click()
})

it('3. Check that contact is gone', () => {
    cy.contains('robin@abacuz.se').should('not.exist')
})