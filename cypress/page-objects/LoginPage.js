class LoginForm{
    openLogin() {
        cy.visit('/',{ failOnStatusCode: false });
    }

    get fillOutEmailAddress(){
        return cy.get(':nth-child(1) > .block')
    }
    get fillOutPassword(){
        return cy.get('.mt-8 > .block')
    }
    get loginButton(){
        return cy.get('.bg-indigo-500')
    }
}

export default new LoginForm(); 