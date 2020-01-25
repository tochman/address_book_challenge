/* 
As a user
To stay in touch with my friends
I would like to be able to create a contact for them in my address book 
*/


// userCanCreateAContact.feature.js


describe('user can access the site', () => {
	it('test', () => {
        cy.visit('http://localhost:3001') 
	})
})

describe('user can create a contact', () => {
	it('test', () => {
        cy.visit('http://localhost:3001') 
        // cy.get('#firstname').type('')
        // cy.get('#lastname').type('')
        // cy.get('#mobile').type('')
        // cy.get('#email').type('')
        // cy.get('#address').type('')
	})
})