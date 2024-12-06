describe('Login Page Redirect Check', () => {
  it('App root url redirects to login page', () => {
    cy.visit('/')
    cy.contains('ion-content', 'Tab 2 page')
  })

  
  it('Home page url redirects to login page', () => {
    cy.visit('/home')
    cy.contains('ion-content', 'Tab 2 page')
  })

  
  it('Game table url redirects to login page', () => {
    cy.visit('/gameTable')
    cy.contains('ion-content', 'Tab 2 page')
  })

  
  it('Game addition form redirects to login page', () => {
    cy.visit('/addGame')
    cy.contains('ion-content', 'Tab 2 page')
  })

  
  it('Login url redirects to login page', () => {
    cy.visit('/login')
    cy.contains('ion-content', 'Tab 2 page')
  })
})