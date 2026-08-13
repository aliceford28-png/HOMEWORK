//login custom command
Cypress.Commands.add("login", (email, name, password) => {
    cy.get("a[[href=" / login"]').click();  
    cy.get('[data-cy="email"]').type(email);
    cy.get('[data-cy="name"]').type(name);
    cy.get('[data-cy="password"]').type(password);
    cy.get('[data-cy="login-button"]').click();
});
//registration step 1 (name,email.password)
Cypress.Commands.add("register", (name, email, password) => {
    cy.get("a[[href=" / login"]').click();
    cy.get('[data-cy="name"]').type(name);
    cy.get('[data-cy="email"]').type(email);
    cy.get('[data-cy="password"]').type(password);
    cy.get('[data-cy="signup-button"]').click();
}
