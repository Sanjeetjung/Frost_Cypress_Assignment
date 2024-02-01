import RegisterPage from '../page-objects/RegisterPage';

const neatCSV = require('neat-csv');
  let table;

describe('Register Form Submit', () => {
  before(()=>{
    cy
    .fixture('RegisterForm.csv')
    .then(neatCSV) //convert csv file into an object
    .then(data => {
      table = data
    } )
    .then(console.table)

  });

  beforeEach(()=>{
    cy.clearAllCookies() // Clear all cookies
    RegisterPage.openRegister();
    cy.get('#register-button').click()    
    // Should be on a new URL which includes '/input-form-demo'
    cy.url().should('include', 'auth/register')
  });

    it('Can fill the Register Form with all valid inputs', () => {
      
      const randomRow = Math.floor(Math.random() * table.length)
      
      cy.log('filling out Company Name'); 
      const CompanyName = table[randomRow]['CompanyName']
      RegisterPage.fillOutCompanyName.type(CompanyName); // Filling out the Company Name Field
      
      cy.log('Check the Domain'); 
      RegisterPage.fillOutDomain.should('have.value', CompanyName.toLowerCase()); // Filling out the Company Name Field
  
      cy.log('filling out Company Email'); 
      RegisterPage.fillOutCompanyEmail.type(table[randomRow]['CompanyEmail']); // Filling out the Company Email Field
      
      cy.log('filling out Company Phone'); 
      RegisterPage.fillOutCompanyPhone.type(table[randomRow]['CompanyPhone']); // Filling out the Company Phone Field
  
      cy.log('filling out Company Address'); 
      RegisterPage.fillOutCompanyAddress.type(table[randomRow]['CompanyAddress']); // Filling out the Company Address Field
  
      cy.log('filling out Company Description'); 
      RegisterPage.fillOutCompanyDescription.type(table[randomRow]['CompanyDescription']); // Filling out the Company Description Field
  
      cy.log('Clicking Proceed Button'); 
      RegisterPage.proceedButton.click(); // Click on Proceed Button
  
      cy.log('filling out First Name'); 
      RegisterPage.fillOutFirstName.type(table[randomRow]['FirstName']); // Filling out the FIrst Name Field
  
      cy.log('filling out Last Name'); 
      RegisterPage.fillOutLastName.type(table[randomRow]['LastName']); // Filling out the FIrst Name Field
  
      cy.log('filling out Email'); 
      RegisterPage.fillOutEmail.type(table[randomRow]['Email']); // Filling out the FIrst Name Field
  
      cy.log('filling out Phone Number'); 
      RegisterPage.fillOutPhoneNumber.type(table[randomRow]['PhoneNumber']); // Filling out the FIrst Name Field
  
      cy.log('Clicking ProceedToResgisterAS Button'); 
      RegisterPage.proceedToRegisterAsButton.click(); // Click on Proceed Button
  
      cy.log('Check the vendor'); 
      RegisterPage.CheckGeneralSubContractor.check(); // Filling out the FIrst Name Field
  
      cy.log('Clicking signUp Button'); 
      RegisterPage.signUpButton.click(); // Click on Proceed Button

       //Register Form Validation by verifying the Success Message
      RegisterPage.successMessage
      .should('contain.text','Registration Successful, please check your email for verification!');
  
     });
     

     it('Test 1 : Cannot submit a Register Form with blank "Phone Number" Field', () => {
      
      const randomRow = Math.floor(Math.random() * table.length)
      
      cy.log('filling out Company Name'); 
      const CompanyName = table[randomRow]['CompanyName']
      RegisterPage.fillOutCompanyName.type(CompanyName); // Filling out the Company Name Field
      
      cy.log('Check the Domain'); 
      RegisterPage.fillOutDomain.should('have.value', CompanyName.toLowerCase()); // Filling out the Company Name Field
  
      cy.log('filling out Company Email'); 
      RegisterPage.fillOutCompanyEmail.type(table[randomRow]['CompanyEmail']); // Filling out the Company Email Field
      
      cy.log('filling out Company Phone'); 
      RegisterPage.fillOutCompanyPhone.type(table[randomRow]['CompanyPhone']); // Filling out the Company Phone Field
  
      cy.log('filling out Company Address'); 
      RegisterPage.fillOutCompanyAddress.type(table[randomRow]['CompanyAddress']); // Filling out the Company Address Field
  
      cy.log('filling out Company Description'); 
      RegisterPage.fillOutCompanyDescription.type(table[randomRow]['CompanyDescription']); // Filling out the Company Description Field
  
      cy.log('Clicking Proceed Button'); 
      RegisterPage.proceedButton.click(); // Click on Proceed Button
  
      cy.log('filling out First Name'); 
      RegisterPage.fillOutFirstName.type(table[randomRow]['FirstName']); // Filling out the FIrst Name Field
  
      cy.log('filling out Last Name'); 
      RegisterPage.fillOutLastName.type(table[randomRow]['LastName']); // Filling out the FIrst Name Field
  
      cy.log('filling out Email'); 
      RegisterPage.fillOutEmail.type(table[randomRow]['Email']); // Filling out the FIrst Name Field
  
      //cy.log('filling out Phone Number'); 
      //RegisterPage.fillOutPhoneNumber.type(''); // Filling out the FIrst Name Field
  
      cy.log('Clicking ProceedToResgisterAS Button'); 
      RegisterPage.proceedToRegisterAsButton.click(); // Click on Proceed Button

       //Register Form Validation by verifying the error message of the Invalid Email Address
       RegisterPage.fillOutPhoneNumber.then($element => {
        const validationMessage = $element[0].validationMessage;
        // Log the validation message or perform assertions
        cy.log('Validation Message:', validationMessage);
       });

    });

});