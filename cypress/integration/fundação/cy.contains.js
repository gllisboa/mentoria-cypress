/// <reference types="Cypress" />


it ("cy.contains() - Selecionando Elementos", () => {

    cy.visit('index.php?id_category=5&controller=category')
        .get('#ul_layered_id_attribute_group_3')
            .contains('Orange')


})