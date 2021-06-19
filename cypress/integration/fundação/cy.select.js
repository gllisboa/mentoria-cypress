/// <reference types="Cypress" />

let teste


it ("cy.select() - Selecionando Elementos", () => {
    cy.visit('index.php?id_category=8&controller=category')
        .get('#selectProductSort')
            .select('price:asc')



})

