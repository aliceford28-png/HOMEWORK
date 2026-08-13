// describe('Automatizacion Test Store-Account Managment', () => {
//   beforeEach(() => {
//     cy.login('iaushka1980', '1033 chesworthrd');
//   });

//   it('should display the account dashboard', () => {
//     cy.get('.success').should('contain', 'My Account');
//   });

//   it('should edit account details and verify saved changes', () => {
//     cy.get('a[title="Edit Account"]').click();
//     cy.get('#AccountFrom_firstname').clear().type('Ira');
//     cy.get('#AccountFrom_lastname').clear().type('Aushka');
//     cy.get('#AccountFrom_email').clear().type('ira.aushka@gmail.com');
//     cy.get('button[title="Update"]').click();
//     cy.get('.success').should('contain', 'Account Updated Successfully');
//     cy.get('alert').should('contain', 'Account Was Updated Successfully');

//   });
//   it ('should change address details and verify saved changes', () => {
//     cy.get('a[title="Address Book"]').click();
//     cy.get('a[title="Edit Address"]').click();
//     cy.get('#AddressFrom_firstname').clear().type('Ira');
//     cy.get('#AddressFrom_lastname').clear().type('Aushka');
//     cy.get('#AddressFrom_city').clear().type('Philadelphia');
//     cy.get('#AddressFrom_postcode').clear().type('19003');
//     cy.get('button[title="Update"]').click();
//     cy.get('.success').should('contain', 'Address Book Updated Successfully');
//     cy.get('button[title="Continue"]').click();
//     cy.get('alert').should('contain', 'Address  Was Updated Successfully');
//   });
//   it('should change password', () => {
//     cy.get('a[title="Change Password"]').click();
//     cy.get('#PasswordFrom_current password').type('1033chesworthrd');
//     cy.get('#PasswordFrom_password').type('1033chesworthrd!');
//     cy.get('#PasswordFrom_confirm').type('1033chesworthrd!');
//     cy.get('button[title="Continue"]').click();
//     cy.get('.success').should('contain', 'your Password Was Updated Successfully');
//   });
// });

