
import LoginPage from "../page-objects/LoginPage";

describe('Testing Landing Page', () => {
  before(()=>{
    LoginPage.openLogin();
    cy.get('#login-btn').click()    
    //Should be on a new URL which includes 'auth/register'
    cy.url().should('include', 'auth/login')
  });
    it('Can fill the Login Form with all valid inputs', () => {
        cy.log('filling out Company Name'); 
    LoginPage.fillOutEmailAddress.type('raju@kodiary.com'); // Filling out the Company Name Field

        cy.log('filling out Company Name'); 
        LoginPage.fillOutPassword.type('P@ssw0rd'); // Filling out the Company Name Field

        cy.log('filling out Company Name'); 
        LoginPage.loginButton.click() // Filling out the Company Name Field

        //Should be on a new URL which includes 'dashboard'
        cy.url().should('include', 'dashboard')
        
    
     });
});
