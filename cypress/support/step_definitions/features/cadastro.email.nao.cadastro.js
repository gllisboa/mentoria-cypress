/* global Given, Then, When, And */

const AuthenticationPage = require('../../pages/authentication.page')
let authenticationPage = new AuthenticationPage()
let emailUnregistered ='emailnaocadastro@teste.com'

When(`Tento realizar um cadastro com um email nao registrado`, () => {

  authenticationPage.createAnAccountWithEmail(emailUnregistered)

  })

Then(`Entao sou direcionado ao formulario`, () => {


  
    })
  


