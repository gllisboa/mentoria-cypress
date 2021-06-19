/// <reference types="Cypress" />



class AuthenticationElements {


    inputEmailCreateAccount(){
        return  cy.get('#email_create')
    }

    btnCreateAnAccount(){
        return cy.get('#SubmitCreate')
    }


}

module.exports = AuthenticationElements