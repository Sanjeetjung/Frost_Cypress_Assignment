class RegisterForm{
    openRegister() {
        cy.visit('/',{ failOnStatusCode: false });
    }

    get fillOutCompanyName(){
        return cy.get('#business-name')
    }
    get fillOutDomain(){
        return cy.get('#domain')
    }

    get fillOutCompanyEmail(){
        return cy.get('#business-email')
    }

    get fillOutCompanyPhone(){
        return cy.get('#business-phone')
    }

    get fillOutCompanyAddress(){
        return cy.get('#business-address')
    }
    get fillOutCompanyDescription(){
        return cy.get('#business-description')
    }
    get proceedButton(){
        return cy.get('.bg-indigo-500');
    }

    get fillOutFirstName(){
        return cy.get('#admin-first-name')
    }
    get fillOutLastName(){
        return cy.get('#admin-last-name')
    }
    get fillOutEmail(){
        return cy.get('#admin-email')
    }
    get fillOutPhoneNumber(){
        return cy.get('#admin-phone')
    }
    get proceedToRegisterAsButton(){
        return cy.get(':nth-child(2) > .mt-10 > :nth-child(2)')
    }
    get checkVendor(){
        return cy.get(':nth-child(1) > .transition')
    }
    get CheckGeneralSubContractor(){
        return cy.get(':nth-child(2) > .transition')
    }
    get checkMunicipality(){
        return cy.get(':nth-child(3) > .transition')
    }

    get signUpButton(){
        return cy.get('.bg-green-500')
    }
    get successMessage(){
        return cy.get('.bg-green-50 > .flex-grow > .flex > span')
    }

}

export default new RegisterForm(); 