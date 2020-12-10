// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('backgroundLogin', () => {
    cy.setCookie(
        'PrestaShop-a30a9934ef476d11b6cc3c983616e364',
        'R6xmma6F4U6edNQuu67M0lqUzDieOgx%2FQyDIS1IIHJp3GpaayUdC6UqfJExAhbsQaxnw2XikL4s9Go39eGSBqERfW%2FLNtuZNzP6UICfv39lYEOfHQring3kHmtn9FwQe5cooMHSVl8bPEBJ2Hf8uVGpalAHP9sZUKr7%2BW19LIMqM1%2FxNNiNEnmKzBXDAXmWpDg1UncdjajF4calER6YnHW%2FbVaJxNkJ3EKJ%2B0vpWbyVnpgzwC7mfoyVQPOCb1is%2BgBj4BlvIwV3JPR3jivorP%2FcP32P%2F1dZhU5K9IKerco7Zb0aEVwP9gA5q8H%2BgxmQCvXaw0jzTYx9w8PS2olOEu%2BqjJEsjv8gIIh0M9mtnlIfq68qMHYFHSC0HKpAtTgjtd2a23f3iv1ilL%2Bc%2FBkSTsCycleSHo2Bfe7NWFoyUCwOJ6phWMnpJ7sYOSSStkj4g000321'
    )
})