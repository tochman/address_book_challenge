/* 
As a user
To stay in touch with my friends
I would like to be able to create a contact for them in my address book 
*/

before(() => {
    cy.visit('http://localhost:3001')
    cy.get('#add-contact').click()
})

describe('User can create a contact', () => {
	it('Create contact', () => {      
		cy.get('#name').type('Robin')
		cy.get('#email').type('robin@abacuz.se')
		cy.get('#phone').type('0700 101010')
		cy.get('#company').type('Craft Academy')
		cy.get('#notes').type('Awesome coder')
        cy.get('#twitter').type('Abacuz08')
        cy.get('#submit').click()
	})

	it('Displays a name of the new contact', () => {
		cy.get('#contact-list').should('contain', 'Robin')
	})
	
	it('Displays the company of the new contact', () => {
		cy.get('#contact-list').should('contain', 'robin@abacuz.se')
	})

	it('Displays the phone number of the new contact', () => {
		cy.get('#contact-list').should('contain', '0700 101010')
	})

	it('Displays the company of the new contact', () => {
		cy.get('#contact-list').should('contain', 'Craft Academy')
	})

	it('Displays the notes of the new contact', () => {
		cy.get('#contact-list').should('contain', 'Awesome coder')
	})

	it('Displays the twitter of the new contact', () => {
		cy.get('#contact-list').should('contain', 'Abacuz08')
	})

	it('Displays update button', () => {
		cy.get('.updateButton')
	})

	it('Displays the delete button', () => {
		cy.get('.deleteButton')
	})
})