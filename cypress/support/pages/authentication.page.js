/// <reference types="Cypress" />

const AuthenticationElements = require('../elements/authentication.elements')
let authenticationElements = new AuthenticationElements()


class AuthenticationPage {

    visit() {
        let path = 'index.php?controller=authentication&back=my-account'


        return  cy.visit(path)

    }

    click(visit = false) {

        if(visit) {
            this.visit()
        }

        return authenticationElements.inputEmailCreateAccount().click()



    }



}

module.exports = AuthenticationPage