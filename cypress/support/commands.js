// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import { addMatchImageSnapshotCommand } from "cypress-image-snapshot/command"

addMatchImageSnapshotCommand()

// define a custome commands in order to use it later as a short cut in your tests

Cypress.Commands.add("isVisable", selector => {
	cy.get(selector).should("be.visible")
})

Cypress.Commands.add("isHidden", selector => {
	cy.get(selector).should("not.exist")
})

Cypress.Commands.add("setResolution", size => {
	// Cypress includes Lodash utility library
	if (Cypress._.isArray(size)) {
		cy.viewport(size[0], size[1])
	} else {
		cy.viewport[size]
	}
})

Cypress.Commands.add("login", (username, password) => {
	cy.get("#login_form").should("be.visible")
	cy.get("#user_login").type(username)
	cy.get("#user_password").type(password)
	cy.get("#user_remember_me").click()
	cy.contains("Sign in").click()
})
