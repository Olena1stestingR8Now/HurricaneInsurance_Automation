describe('empty spec', () => {

  before(() => {
    
    cy.visit('/')
    
    sessionStorage.clear()
    cy.clearCookies()
    cy.clearLocalStorage()
    
  })
  it('Entering zip code', () => {
    cy.get('.MuiInputBase-input').type('12345')
    cy.get('.MuiButtonBase-root').click()
    cy.url().should('eq', 'https://sure-qa-challenge.vercel.app/building-material')
  })
  it('Selecting option from building material page', () => {
    cy.get('[data-testid="bricks"] > .MuiButtonBase-root > .MuiIconButton-label > .jss22').check()
    cy.get('[data-testid="submit_cta"]').click()
    cy.url().should('eq', 'https://sure-qa-challenge.vercel.app/water-proximity')
  })
  it('Selecting option from water proximity page', () => {
    cy.get(':nth-child(1) > .MuiButtonBase-root > .MuiIconButton-label > .jss36').check()
    cy.get('.jss40 > .MuiButtonBase-root').click()
    cy.url().should('eq', 'https://sure-qa-challenge.vercel.app/quote')

  })
  it('Verifying plan available', () => {
    cy.get('.jss46').should('be.visible')
    cy.get('.jss51').should('be.visible')
  })



})