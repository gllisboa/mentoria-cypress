/// <reference types="Cypress" />



class AuthenticationElements {


    inputEmailCreateAccount(){
        return  cy.get('#email_create')
    }

}

module.exports = AuthenticationElements