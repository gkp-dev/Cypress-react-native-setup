describe('My First Test', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should test the form with only the email completed', () => {
    cy.contains(/email/i)
    cy.contains(/password/i)
    //Get Email
    cy.get('[placeholder="JohnDoe@exemple.com"]')
      .type('majdi@gmail.com')
      .should('have.value', 'majdi@gmail.com')
    cy.get('[role="button"]').click()
  })

  it('should test the form with only the password completed', () => {
    cy.contains(/email/i)
    cy.contains(/password/i)
    //Get password
    cy.get('[placeholder="Password"]')
      .type('1234njckd')
      .should('have.value', '1234njckd')
    cy.get('[role="button"]').click()
  })

  it('should test the complte form', () => {
    cy.contains(/email/i)
    cy.contains(/password/i)
    //Get Email
    cy.get('[placeholder="JohnDoe@exemple.com"]')
      .type('majdi@gmail.com')
      .should('have.value', 'majdi@gmail.com')
    //Get password
    cy.get('[placeholder="Password"]')
      .type('1234njckd')
      .should('have.value', '1234njckd')
    cy.get('[role="button"]').click()
  })
})
