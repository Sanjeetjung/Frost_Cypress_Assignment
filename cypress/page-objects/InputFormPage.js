class InputForm{
    openSeleniumPlayground() {
        cy.visit('selenium-playground/');
    }
    get fillOutName(){
        return cy.get('#name');
    }
    get fillOutEmail(){
        return cy.get('#inputEmail4');
    }
    get fillOutPassword(){
        return cy.get('#inputPassword4');
    }
    get fillOutCompany(){
        return cy.get('#company');
    }
    get fillOutWebsite(){
        return   cy.get('#websitename');
    }
    get fillOutCountry(){
        return cy.get(':nth-child(3) > .pr-20 > .w-full');
    }
    get fillOutCity(){
        return cy.get('#inputCity');
    }
    get fillOutAddress1(){
        return cy.get('#inputAddress1');
    }
    get fillOutAddress2(){
        return cy.get('#inputAddress2');
    }
    get fillOutState(){
        return cy.get('#inputState');    
    }
    get fillOutZipcode(){
        return cy.get('#inputZip');
    }
    get submitButton(){
        return cy.get('.bg-lambda-900');
    }
    get successMessage(){
        return cy.get('.success-msg');
    }
}

export default new InputForm(); 