// Test 1: Search on Wikipedia
describe('Wikipedia E2E Test - Search', () => {
  it('Should visit Wikipedia, perform a search, and click on the search result for "earth"', () => {
    // Visit the Wikipedia search results page for "earth"
    cy.visit('https://en.wikipedia.org/wiki/Special:Search?search=earth');

    // Example: Click on the search result link for "earth"
    cy.contains('earth').click();

    // Verify that the page contains information related to "earth"
    cy.get('#firstHeading').should('contain', 'Earth');

    // Add more E2E test steps as needed
  });
});
