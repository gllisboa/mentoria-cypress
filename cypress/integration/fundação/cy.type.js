/// <reference types="Cypress" />



it ("cy.type() - Selecionando Elementos", ()    => {
    cy.visit('index.php?controller=authentication&back=my-account')
        .get('#search_query_top')
            .type('bottomLeft{enter}', {force:true})



})

