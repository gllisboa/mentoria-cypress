/// <reference types="Cypress" />

const AuthenticationElements = require('../elements/authentication.elements')
let authenticationElements = new AuthenticationElements()

let path ='index.php?controller=authentication&back=my-account'





class AuthenticationPage  {

    visit(){

        return cy.visit(path)

    }

    type(text){

      return  authenticationElements.inputEmailCreateAccount()
                                        .should('be.visible')
                                            .type(text)

    }

    clickBtnCreateAnAccount(){
        return authenticationElements.btnCreateAnAccount()
                                        .should('be.visible')
                                            .click()
    }


    createAnAccountWithEmail(email) {
      return  this.type(email)
                    .then(() =>{
                         this.clickBtnCreateAnAccount()
                 })
    }

}

module.exports = AuthenticationPage