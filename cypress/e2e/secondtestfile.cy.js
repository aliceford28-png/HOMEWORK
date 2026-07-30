describe('Automatizacion Test Store-Account Managment', () => {
 beforeEach(() => {
    cy.login('iaushka1980', '1033chesworthrd');
    it('should display the account dashboard', () => {
        cy.get('.success').should('contain', 'My Account');

    it('should edit account details and verify the changes', () => {
      
    }



  }


  