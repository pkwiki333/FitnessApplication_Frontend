describe('test form', () => {
  beforeEach(() => {
    cy.login();
  });
  it('passes', () => {
    cy.visit('http://localhost:3000/profile')

    cy.get('input[type="radio"]').check("vrouw",{ force: true })
    cy.get('[data-cy="age_input"]').type('19')
    cy.get('[data-cy="weight_input"]').type('78')
    cy.get('[data-cy="height_input"]').type('184')
    cy.get('[data-cy="injuries_input"]').type('no')
    cy.get('[data-cy="submit_button"]').click()
    

  })
})