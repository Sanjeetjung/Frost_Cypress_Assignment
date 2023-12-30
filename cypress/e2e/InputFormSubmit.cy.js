import InputForm from '../page-objects/InputFormpage';


const neatCSV = require('neat-csv');
  let table;

describe('Input Form Submit', () => {
  before(()=>{
    cy
    .fixture('InputForm.csv')
    .then(neatCSV) //convert csv file into an object
    .then(data => {
      table = data;
    } )
    .then(console.table)

  });

  beforeEach(()=>{
    InputForm.openSeleniumPlayground();
        cy.get(':nth-child(20) > .text-black').click()
        // Should be on a new URL which includes '/input-form-demo'
        cy.url().should('include', '/input-form-demo')
  });

    it('can submit a Input Form with all valid inputs', () => {
      
      const randomRow = Math.floor(Math.random() * table.length)
      
     
      cy.log('filling out Name'); 
      InputForm.fillOutName.type(table[randomRow]['Name']); // Filling out the Name Field
     
      cy.log('filling out email'); 
      InputForm.fillOutEmail.type(table[randomRow]['Email']);  // Filling out the Email Field 

      cy.log('filling out Password');
      InputForm.fillOutPassword.type(table[randomRow]['Password']);  // Filling out the Password Field 

      cy.log('filling out Company'); 
      InputForm.fillOutCompany.type(table[randomRow]['Company']);  // Filling out the Company Field 
  
      cy.log('filling out Website'); 
      InputForm.fillOutWebsite.type(table[randomRow]['Website']);  // Filling out the Website Field 

      cy.log('filling out Country'); 
      InputForm.fillOutCountry
        .select(table[randomRow]['Country'])
        .should('have.value', table[randomRow]['Country']);  // Filling out the Country Field 

      cy.log('filling out City'); 
      InputForm.fillOutCity.type(table[randomRow]['City']);  // Filling out the City Field 

      cy.log('filling out Adddress1'); 
      InputForm.fillOutAddress1.type(table[randomRow]['Address1']);  // Filling out the Address1 Field 

      cy.log('filling out Address2'); 
      InputForm.fillOutAddress2.type(table[randomRow]['Address2']);  // Filling out the Address2 Field 

      cy.log('filling out State'); 
      InputForm.fillOutState.type(table[randomRow]['State']);  // Filling out the State Field 

      cy.log('filling out Zip Code'); 
      InputForm.fillOutZipcode.type(table[randomRow]['Zipcode']);  // Filling out the Zipcode Field 

      cy.log('submitting form'); 
      InputForm.submitButton.click();

      //Input Form Validation by verifying the Success Message
      InputForm.successMessage
        .should('contain.text','Thanks for contacting us, we will get back to you shortly.');
      
    });

    it('Test 1: Cannot submit a Input Form with invalid email address', () => {
      
      const randomRow = Math.floor(Math.random() * table.length)
      
      cy.log('filling out Name'); 
      InputForm.fillOutName.type(table[randomRow]['Name']);
  
      cy.log('filling out email'); 
      InputForm.fillOutEmail.type('sanjeet@'); //Typing the invalid email address

      cy.log('filling out Password'); 
      InputForm.fillOutPassword.type(table[randomRow]['Password']);

      cy.log('filling out Company'); 
      InputForm.fillOutCompany.type(table[randomRow]['Company']);
  
      cy.log('filling out Website'); 
      InputForm.fillOutWebsite.type(table[randomRow]['Website']);

      cy.log('filling out Country'); 
      InputForm.fillOutCountry
        .select(table[randomRow]['Country'])
        .should('have.value', table[randomRow]['Country']);

      cy.log('filling out City'); 
      InputForm.fillOutCity.type(table[randomRow]['City']);

      cy.log('filling out Adddress1'); 
      InputForm.fillOutAddress1.type(table[randomRow]['Address1']);

      cy.log('filling out Address2'); 
      InputForm.fillOutAddress2.type(table[randomRow]['Address2']);

      cy.log('filling out State'); 
      InputForm.fillOutState.type(table[randomRow]['State']);

      cy.log('filling out Zip Code'); 
      InputForm.fillOutZipcode.type(table[randomRow]['Zipcode']);

      cy.log('submitting form'); 
      InputForm.submitButton.click();

      //validate the error message of the Invalid Email Address
      InputForm.fillOutEmail.then($element => {
        const validationMessage = $element[0].validationMessage;
        // Log the validation message or perform assertions
        cy.log('Validation Message:', validationMessage);
        // You can also use the validation message in Cypress assertions if needed
      });
    });

    it('Test 2: Cannot submit a Input Form with blank "Name" ', () => {
      
      const randomRow = Math.floor(Math.random() * table.length)
      
      //cy.log('filling out Name'); 
      //InputForm.fillOutName.type(empty);
  
      cy.log('filling out email'); 
      InputForm.fillOutEmail.type(table[randomRow]['Email']); 

      cy.log('filling out Password'); 
      InputForm.fillOutPassword.type(table[randomRow]['Password']);

      cy.log('filling out Company'); 
      InputForm.fillOutCompany.type(table[randomRow]['Company']);
  
      cy.log('filling out Website'); 
      InputForm.fillOutWebsite.type(table[randomRow]['Website']);

      cy.log('filling out Country'); 
      InputForm.fillOutCountry
        .select(table[randomRow]['Country'])
        .should('have.value', table[randomRow]['Country']);

      cy.log('filling out City'); 
      InputForm.fillOutCity.type(table[randomRow]['City']);

      cy.log('filling out Adddress1'); 
      InputForm.fillOutAddress1.type(table[randomRow]['Address1']);

      cy.log('filling out Address2'); 
      InputForm.fillOutAddress2.type(table[randomRow]['Address2']);

      cy.log('filling out State'); 
      InputForm.fillOutState.type(table[randomRow]['State']);

      cy.log('filling out Zip Code'); 
      InputForm.fillOutZipcode.type(table[randomRow]['Zipcode']);

      cy.log('submitting form'); 
      InputForm.submitButton.click();

      //Input Form Validation by verifying the error message of the Invalid Email Address
      InputForm.fillOutName.then($element => {
        const validationMessage = $element[0].validationMessage;
        // Log the validation message or perform assertions
        cy.log('Validation Message:', validationMessage);
       });
      
    });
    it('Test 3: Cannot submit a Input Form with blank "Country" Field ', () => {
      
      const randomRow = Math.floor(Math.random() * table.length)
      
      cy.log('filling out Name'); 
      InputForm.fillOutName.type(table[randomRow]['Name']);
  
      cy.log('filling out email'); 
      InputForm.fillOutEmail.type(table[randomRow]['Email']); 

      cy.log('filling out Password'); 
      InputForm.fillOutPassword.type(table[randomRow]['Password']);

      cy.log('filling out Company'); 
      InputForm.fillOutCompany.type(table[randomRow]['Company']);
  
      cy.log('filling out Website'); 
      InputForm.fillOutWebsite.type(table[randomRow]['Website']);

      cy.log('Selecting out Country with blank value'); 
      /*InputForm.fillOutCountry
        .select(table[randomRow]['Country'])
        .should('have.value', table[randomRow]['Country']);
      */

      cy.log('filling out City'); 
      InputForm.fillOutCity.type(table[randomRow]['City']);

      cy.log('filling out Adddress1'); 
      InputForm.fillOutAddress1.type(table[randomRow]['Address1']);

      cy.log('filling out Address2'); 
      InputForm.fillOutAddress2.type(table[randomRow]['Address2']);

      cy.log('filling out State'); 
      InputForm.fillOutState.type(table[randomRow]['State']);

      cy.log('filling out Zip Code'); 
      InputForm.fillOutZipcode.type(table[randomRow]['Zipcode']);

      cy.log('submitting form'); 
      InputForm.submitButton.click();

    });

  });