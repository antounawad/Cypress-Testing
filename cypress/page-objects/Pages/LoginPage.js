import BasePage from "../BasePage"

export default class LoginPage extends BasePage {
	static loginUser(username, password) {
		cy.login(username, password)
	}

	static clickForgotPassword() {
		cy.contains("Forgot your password ?").click()
	}

	static displayErrorMsg() {
		//cy.get(".alert.alert-error").should("be.visible")
		cy.isVisable(".alert.alert-error")
	}
}
