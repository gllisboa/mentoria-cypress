/// <reference types="Cypress" />



it ("cy.visit() - Selecionando Elementos", () => {
    cy.visit('index.php?id_category=3&controller=category')
})