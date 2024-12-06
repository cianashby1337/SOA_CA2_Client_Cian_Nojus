describe('Login Page Redirect Check', () => {
  it('App root url redirects to login page', () => {
    cy.visit('/')
    cy.contains('h2', 'Please login to continue')
  })

  
  it('Home page url redirects to login page', () => {
    cy.visit('/home')
    cy.contains('h2', 'Please login to continue')
  })

  
  it('Game table url redirects to login page', () => {
    cy.visit('/gameTable')
    cy.contains('h2', 'Please login to continue')
  })

  
  it('Game addition form redirects to login page', () => {
    cy.visit('/addGame')
    cy.contains('h2', 'Please login to continue')
  })

  
  it('Login url redirects to login page', () => {
    cy.visit('/login')
    cy.contains('h2', 'Please login to continue')
  })
})