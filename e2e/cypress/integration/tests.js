const assert = require('assert');

describe('todo functional tests', () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.visit('http://localhost:3000');
  });
  afterEach(() => {
    cy.clearLocalStorage();
  });

  it('page loads properly', () => {
    // act
    cy.visit('http://localhost:3000');
  });

  it('creates a new todo', () => {
    // arrange
    const title = 'A demo title for a todo';

    // act
    cy.get('input[id="txtTodoItemToAdd"]').type(title);
    cy.get('[id="btnAddTodo"]').click();

    // assert
    cy.get('[id="todoList"]').should('have.length', 1);
    cy.get('[id="todoList"]').contains(title);
  });

  it('completes a todo', () => {
    // arrange
    const title =
      'A title at ' + new Date().getSeconds() + new Date().getMilliseconds();
    cy.get('input[id="txtTodoItemToAdd"]').type(title);
    cy.get('[id="btnAddTodo"]').click();

    // act
    cy.get('.todo--toggle-completed').click();
    cy.get('[id="todoList"]')
      .children()
      .first()
      .should('have.class', 'todo--completed');

    cy.get('.todo--toggle-completed').click();
    cy.get('[id="todoList"]')
      .children()
      .first()
      .should('not.have.class', 'todo--completed');
  });
});
