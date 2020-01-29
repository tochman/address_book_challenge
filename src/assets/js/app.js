const  storage = window.localStorage

const  renderContacts = () => {
  const  contacts = JSON.parse(storage.getItem('contacts'))

  let  div = document.querySelector('#contact-list')
  if (contacts) {
	div.innerHTML = ''
	//const  ul = document.createElement('ul')
    i = 0
	contacts.forEach(contact  => {
		var newDiv = document.createElement("div");
		newDiv.classList.add("contact-card");
		newDiv.innerHTML = `
		<div class="contact-name">${contact.name}</div>
		<div class="contact-email">${contact.email}</div>
		<div class="contact-phone">${contact.phone}</div>
		<div class="contact-company">${contact.company}</div>
		<div class="contact-notes">${contact.notes}</div>
		<div class="contact-twitter">@${contact.twitter}</div>
		<input type="button" value="Update" class="updateButton" onclick="updateContact(${i})"/> 
		<input type="button" value="Delete" class="deleteButton" onclick="RemoveContact(${i})"/>`
        div.appendChild(newDiv)
        i++;
	  })
	} else {
	  div.innerHTML = '<p>You have no contacts in your address book</p>'
	}
}

document.addEventListener('DOMContentLoaded', () => {
	renderContacts()
	const  contactForm = document.getElementById('new-contact-form')
	const  toggleFormVisibilityButton = document.getElementById('add-contact')
	contactForm.style.display = 'none'
 
	toggleFormVisibilityButton.addEventListener('click', () => {
		if (contactForm.style.display === '') {
			contactForm.style.display = 'none'
		} else {
			contactForm.style.display = ''
		}
    })
    
	contactForm.addEventListener('submit', event  => {
		event.preventDefault()

		// 1. Read all the input fields and get their values
		const { name, email, phone, company, notes, twitter } = contactForm.elements

		const  contact = {
			name:  name.value,
			email:  email.value,
			phone:  phone.value,
			company:  company.value,
			notes:  notes.value,
			twitter:  twitter.value,
        }
        
		let contacts = JSON.parse(storage.getItem('contacts')) || []
		contacts.push(contact)

		// 2. Save them to our storage
		storage.setItem('contacts', JSON.stringify(contacts))
		renderContacts()
		contactForm.reset()
   })
})

function updateContact(toBeRemoved) {
	
	displayUpdateFields(toBeRemoved)
	
	const updateContactForm = document.getElementById('update-contact-form')

	contactForm.addEventListener('submit', event  => {
		event.preventDefault()

		// 1. Read all the input fields and get their values
		const { name, email, phone, company, notes, twitter } = contactForm.elements

		const  contact = {
			name:  name.value,
			email:  email.value,
			phone:  phone.value,
			company:  company.value,
			notes:  notes.value,
			twitter:  twitter.value,
        }

		storage.setItem('contacts', JSON.stringify(contacts))
		renderContacts()
		contactForm.reset()
   })

	let newContacts = JSON.parse(storage.getItem('contacts'))
    newContacts.splice(toBeRemoved, 1);
}

function RemoveContact(toBeRemoved) {
    let newContacts = JSON.parse(storage.getItem('contacts'))
    newContacts.splice(toBeRemoved, 1);
    storage.clear()
    storage.setItem('contacts', JSON.stringify(newContacts))
    renderContacts()
}


function RemoveAllContact() {
    storage.clear()
    renderContacts()
}

function displayUpdateFields(id) {
    
}

