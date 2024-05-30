describe("test createWorkout", () => {
  beforeEach(() => {
    cy.login();
  });
  it("passes", () => {
    cy.visit("http://localhost:3000/workouts");

    cy.get("[data-cy='createWorkout_button']").click();
    cy.get("[data-cy='workoutName_input']").type("test5");
    cy.get("[data-cy='createWorkout_button']").click();
  });
});
