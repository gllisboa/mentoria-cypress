/// <reference types="Cypress" />

// Permite que o usuário dispare funcoes JQUERY nos elementos capturados
// Precisa de uma busca antes como get()

it ("cy.invoke() - Selecionando Elementos", () => {
    cy.get().invoke()
})