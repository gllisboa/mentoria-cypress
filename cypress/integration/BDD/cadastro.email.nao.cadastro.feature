
Feature: Mentoria

  Scenario: Primeiro BDD
    Given Acesso a pagina de Authentication
    When  Tento realizar um cadastro com um email nao registrado
    Then  Entao sou direcionado ao formulario
