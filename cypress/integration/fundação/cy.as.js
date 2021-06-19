/// <reference types="Cypress" />



it ("cy.as() - Selecionando Elementos", () => {
    cy.visit('index.php?id_category=5&controller=category')
        .get('#layered_block_left')
             .as('caixaFiltro')
})