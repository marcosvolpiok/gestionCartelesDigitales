/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.waitForReact(1000, '#root'); // 1000 is the timeout in milliseconds, you can provide as per AUT
  })

  it('.click() - Click in button and check if change text', () => {
    cy.get('#action')
      .click()
    cy.wait(3000)
    cy.get('#action').should('have.text', 'PLAY')
  })

  it('.cliick() - Click and check if video\'s status changed', () => {
    cy.get('#action')
      .click()
    
    cy.wait(5000)
    cy.get('#mainVideo').should($video => {
      expect($video.get(0)).to.have.property('paused', true);
    });

  })

})
