// 1. Launch browser
cy.visit('about:blank');
// 2. Navigate to url 'http://automationexercise.com'
cy.visit('http://automationexercise.com');
// 3. Verify that home page is visible successfully
cy.get('body').should('be.visible');
cy.title().should('include', 'Automation Exercise - Home');
// 4. Click on 'Signup / Login' button
cy.contains ('a', 'Signup / Login').click();
// 5. Verify 'New User Signup!' is visible
cy.contains('h2', 'New User Signup!').should('be.visible');
// 6. Enter name and email address
cy.get('input[name="name"]').type('aliceford');
cy.get('input[name="email"]').type('aliceford@example.com');
// 7. Click 'Signup' button
cy.get('[data-qa="signup-button"]').click();
// 8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
cy.contains('h2', 'ENTER ACCOUNT INFORMATION').should('be.visible');
// 9. Fill details: Title, Name, Email, Password, Date of birth
cy.get('input[name="title"][value="Mrs"]').check();
cy.get('input[name="password"]').type('aliceford123!');
cy.get('select[name="days"]').select('8');
cy.get('select[name="months"]').select('March');
cy.get('select[name="years"]').select('1980');  
// 10. Select checkbox 'Sign up for our newsletter!'
cy.get('input[name="newsletter"]').check();
// 11. Select checkbox 'Receive special offers from our partners!'
cy.get('input[name="optin"]').check();
// 12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
cy.get('input[name="first_name"]').type('Alice');
cy.get('input[name="last_name"]').type('Ford');
cy.get('input[name="company"]').type('Ford Inc.');
cy.get('input[name="address1"]').type('1033 c ');
cy.get('input[name="address2"]').type('Apartment 105');
cy.get('select[name="country"]').select('United States');
cy.get('input[name="state"]').type('Pennsylvania');
cy.get('input[name="city"]').type('Philadelphia');
cy.get('input[name="zipcode"]').type('19116');
cy.get('input[name="mobile_number"]').type('440-4444');
// 13. Click 'Create Account button'
cy.get('[data-qa="create-account"]').click();
// 14. Verify that 'ACCOUNT CREATED!' is visible
cy.contains('h2', 'ACCOUNT CREATED!').should('be.visible');
// 15. Click 'Continue' button
cy.get('[data-qa="continue-button"]').click();
// 16. Verify that 'Logged in as username' is visible
cy.contains('a', 'Logged in as aliceford').should('be.visible');