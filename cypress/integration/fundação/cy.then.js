/// <reference types="Cypress" />

/// Permite que o usuário utilize um elemento anterior e aplice JS ou JQUERY em cima dele
/// Permite forçar que alguns comandos sejam realizados apenas quando a lista de comandos antes do then tenha finalizados
/// Precisa ser precedido por uma busca de elementos pelo menos como get() ou find()

it ("cy.then() - Selecionando Elementos", () => {
    cy.get().then(() => {

    })
})