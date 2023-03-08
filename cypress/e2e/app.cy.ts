/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress

// Cypress E2E Test
describe("Navigation", () => {
  it("title should be...", () => {
    // Start from the index page
    cy.visit("http://localhost:3000/");

    // The new page should contain an h1 with "Welcome to Next.js!"
    cy.get("h1").contains("Welcome to Next.js!");
  });
});

// Prevent TypeScript from reading file as legacy script
export {};
