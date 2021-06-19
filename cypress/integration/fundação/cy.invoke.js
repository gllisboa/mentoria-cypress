/// <reference types="Cypress" />



it ("cy.invoke() - Selecionando Elementos", () => {
    cy.visit('index.php?id_category=5&controller=category')
        .get('#layered_block_left')
            .find('#ul_layered_id_feature_6 > .nomargin > label > a')
                .invoke('text')
                    .should('have.string', 'Casual (1)')

})