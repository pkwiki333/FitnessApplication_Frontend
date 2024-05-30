describe('check exercises', () => {
  beforeEach(() => {
    cy.login();
  });
  it('passes', () => {
    cy.visit('http://localhost:3000')
  })
})