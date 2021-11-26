import { url, login_username, login_password } from "../../../config"
import navbar from "../../page-objects/components/navBar"
import loginPage from "../../page-objects/Pages/LoginPage"

describe("login failed test", () => {
	before(function () {
		cy.visit(url)
		navbar.clickSignButton()
	})
	it("login with wrong Data", () => {
		loginPage.loginUser("invalidUsername", "InvalidPassword")
	})
	it("should display Error msg", () => {
		loginPage.displayErrorMsg()
	})
})

describe("Success Login", () => {
	it("should be able to loginggg", () => {
		loginPage.loginUser(login_username, login_password)
	})
})
