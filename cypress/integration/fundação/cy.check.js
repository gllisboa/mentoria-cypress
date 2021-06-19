/// <reference types="Cypress" />



it ("cy.check() - Selecionando Elementos", () => {

    cy.visit('index.php?id_category=8&controller=category')
        .get('#layered_category_9')
            .check()
                .uncheck()


})