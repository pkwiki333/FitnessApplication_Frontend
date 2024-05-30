describe('controleer workouts', () => {
  beforeEach(() => {
    cy.login();
  });
  it('passes', () => {
    cy.visit('http://localhost:3000/workouts')
  })
})