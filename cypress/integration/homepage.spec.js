describe("Check home page", function(){
  it("Page load check", function(){
    cy.visit("https://www.cypress.io/")
    cy.contains('features').click()
    cy.scrollTo('bottom')
    cy.scrollTo('top')
    cy.contains('How it works').click()
    cy.url().should('include','how-it-works')
  })
})
