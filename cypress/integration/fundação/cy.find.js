/// <reference types="Cypress" />



it ("cy.find() - Selecionando Elementos", () => {
    cy.visit('index.php?id_category=5&controller=category')
        .get('#layered_block_left')
             .as('caixaFiltro')
                .find('#ul_layered_id_feature_6 > .nomargin > label > a')
    .get('@caixaFiltro')
        .find('#ul_layered_condition_0 > .nomargin > label > a')

})