describe('Testing Landing Page', () => {
  beforeEach(() => {
    cy.visit('selenium-playground/')
 })
  it('clicking "Input Form Submit" navigates to a new url', () => {

    cy.get(':nth-child(20) > .text-black').click()

    // Should be on a new URL which includes '/input-form-demo'
    cy.url().should('include', '/input-form-demo')
  })
})