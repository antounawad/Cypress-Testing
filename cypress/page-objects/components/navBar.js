//define deffirent functions to be done on the components shared between most or all the pages
export default class navBar {
	static clickHomePageLogo() {
		cy.get(".brand").click()
	}

	static searchText(text) {
		//Template Literals using `backticks`
		cy.get("searchTerm").type(`${text}, {enter}`)
	}

	static clickSignButton() {
		cy.get("#signin_button").click()
	}
}
