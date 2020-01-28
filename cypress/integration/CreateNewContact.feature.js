/* 
As a user
To stay in touch with my friends
I would like to be able to create a contact for them in my address book 
*/


// userCanCreateAContact.feature.js

before(() => {
    cy.visit('http://localhost:3001')
    cy.get('#add-contact').click()
})

describe('2. User can create a contact', () => {
	it('test', () => {      
		cy.get('#name').type('Robin')
		cy.get('#email').type('robin@abacuz.se')
		cy.get('#phone').type('0700 101010')
		cy.get('#company').type('Craft Academy')
		cy.get('#notes').type('Awesome coder')
        cy.get('#twitter').type('@abacuz08')
        cy.get('#submit').click()
	})
})

it('3. Displays a name of the new contact', () => {
    cy.get('#contact-list').should('contain', 'Robin')
})

it('4. Displays the phone number of the new contact', () => {
    cy.get('#contact-list').should('contain', '0700 101010')
})