/// <reference types="Cypress" />



it ("cy.click() - Selecionando Elementos", ()    => {
    cy.visit('index.php?controller=authentication&back=my-account')
        .get('#email_create')
            .click('bottomLeft')



})

