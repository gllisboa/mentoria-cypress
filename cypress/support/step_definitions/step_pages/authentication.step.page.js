/* global Given, Then, When, And */

const AuthenticationPage = require('../../pages/authentication.page')
let authenticationPage = new AuthenticationPage()

Given(`Acesso a pagina de Authentication`, () => {

    authenticationPage.visit()

    

})
